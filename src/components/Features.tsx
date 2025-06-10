import React from "react";
import styled from "styled-components";
import Section from "./layout/Section";

// Import SVG icons as React components
import DiagnosticAssessment from "../icons/DiagnosticAssessment";
import VirtualCFO from "../icons/VirtualCFO";
import StrategicPartnership from "../icons/StrategicPartnership";
import TechIntegration from "../icons/TechIntegration";

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr;

    & > :first-child {
      grid-column: 1;
    }
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    width: 45px;
    height: 45px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #232166;
  margin: 0 0 1rem 0;
  line-height: 1.3;
`;

const FeatureBenefit = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
  max-width: 540px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #232166;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.2;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 2rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 1.5rem;
  }
`;

const Features: React.FC = () => {
  return (
    <Section id="features">
      <FeaturesContainer>
        <SectionTitle>
          Big business services. <br /> Small business prices.
        </SectionTitle>

        {/* Top Feature */}
        <FeaturesGrid>
          <FeatureCard>
            <IconContainer>
              <DiagnosticAssessment />
            </IconContainer>
            <FeatureTitle>Diagnostic Assessment</FeatureTitle>
            <FeatureBenefit>
              Pinpoint where your money is leaking and what&#39;s holding your
              business back, so you can stop guessing and start fixing.
            </FeatureBenefit>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <VirtualCFO />
            </IconContainer>
            <FeatureTitle>Virtual CFO & Controller Services</FeatureTitle>
            <FeatureBenefit>
              Get high-level financial strategy and oversight without hiring
              full-time staff, giving you clarity, control, and confidence in
              your cash flow.
            </FeatureBenefit>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <StrategicPartnership />
            </IconContainer>
            <FeatureTitle>Strategic Partnership</FeatureTitle>
            <FeatureBenefit>
              Ongoing, month-to-month support from experts who know construction
              and finance. We help you tighten cash flow, clean up receivables,
              and streamline your back office—so you get paid faster and run
              smarter, without big-firm costs.
            </FeatureBenefit>
          </FeatureCard>

          <FeatureCard>
            <IconContainer>
              <TechIntegration />
            </IconContainer>
            <FeatureTitle>
              Modern Tech Integration <br /> (Including AI Tools)
            </FeatureTitle>
            <FeatureBenefit>
              Save hours of manual work, reduce costly errors, and get real-time
              insights, so you can make smarter decisions, faster.
            </FeatureBenefit>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesContainer>
    </Section>
  );
};

export default Features;
