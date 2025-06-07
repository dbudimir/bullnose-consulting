import React from "react";
import styled from "styled-components";
import Section from "./layout/Section";

const AboutContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  p {
    margin-bottom: 1.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const About: React.FC = () => {
  return (
    <Section id="about" backgroundColor="#f8f9fa">
      <AboutContainer>
        <Title>About</Title>
        <Content>
          <p>
            At Bullnose Consulting, we combine real-world construction
            experience with CFO-level financial insight and modern technology
            tools to help family-owned and independently-run contractors build
            stronger, more profitable businesses. We&#39;ve spent over 20 years
            in the field ourselves, so we understand the challenges you face—and
            how the right systems, tools, and financial strategy can make all
            the difference.
          </p>
          <p>
            With Bullnose, you get high-level financial and tech
            guidance—typically reserved for much larger companies—without the
            bloated costs. We&#39;ll handle the numbers and modernize your
            operations, so you can stay focused on what you do best: building.
          </p>
        </Content>
      </AboutContainer>
    </Section>
  );
};

export default About;
