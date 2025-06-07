import React, { useState } from "react";
import styled from "styled-components";
import SplitSection from "./layout/SplitSection";
import Button from "./Button";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const ContactContainer = styled.div`
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const FormContainer = styled.form`
  width: 60%;
  margin: 0 auto;
  text-align: left;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px 30px 5px 5px;
  margin-right: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const RequiredIndicator = styled.span`
  color: #ef4444;
  margin-left: 0.25rem;
`;

const StatusMessage = styled.div<{ $type: "success" | "error" | "loading" }>`
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;

  ${(props) => {
    switch (props.$type) {
      case "success":
        return `
          background-color: #dcfce7;
          color: #166534;
          border: 1px solid #bbf7d0;
        `;
      case "error":
        return `
          background-color: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        `;
      case "loading":
        return `
          background-color: #dbeafe;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        `;
      default:
        return "";
    }
  }}
`;

const SubmitButtonContainer = styled.div`
  text-align: left;
  margin-top: 2rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We&#39;ll get back to you soon.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <SplitSection
      backgroundColor="#f9fafb"
      id="contact"
      imageSrc="/static-assets/house-project.png"
    >
      <ContactContainer>
        <FormContainer>
          <ContactTitle>Get In Touch</ContactTitle>

          <FormGroup>
            <Label htmlFor="name">
              Full Name
              <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">
              Email Address
              <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="company">Company Name</Label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              Message
              <RequiredIndicator>*</RequiredIndicator>
            </Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or how we can help..."
              required
            />
          </FormGroup>

          <SubmitButtonContainer>
            <Button
              text={status.type === "loading" ? "Sending..." : "Send Message"}
              size="md"
              color="#3b82f6"
              onClick={() => {
                // Validate required fields
                if (
                  !formData.name.trim() ||
                  !formData.email.trim() ||
                  !formData.message.trim()
                ) {
                  setStatus({
                    type: "error",
                    message: "Please fill in all required fields.",
                  });
                  return;
                }

                // Create a synthetic event to pass to handleSubmit
                const syntheticEvent = {
                  preventDefault: () => {},
                } as React.FormEvent;

                handleSubmit(syntheticEvent);
              }}
            />
          </SubmitButtonContainer>

          {status.message && (
            <StatusMessage
              $type={status.type as "success" | "error" | "loading"}
            >
              {status.message}
            </StatusMessage>
          )}
        </FormContainer>
      </ContactContainer>
    </SplitSection>
  );
};

export default Contact;
