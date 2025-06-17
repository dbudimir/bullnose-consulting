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
  line-height: 1;

  ${(props) => props.theme.mediaQueries.tablet} {
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

  ${(props) => props.theme.mediaQueries.tablet} {
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
            At Bullnose Consulting, we combine real world construction
            experience with CFO-level financial insight and modern technology
            tools to help family owned and independently run contractors build
            stronger, leaner, more profitable businesses. We&#39;ve spent over
            20 years in the industry ourselves, and understand the construction
            landscape in DC, Maryland, Virginia, and Delaware. We also know
            first hand how the right systems, tools, and financial strategy can
            take a business from just getting by to running like a well-oiled,
            profit-generating machine.
          </p>
          <p>
            We&#39;re passionate about supporting Small to Medium-Sized
            construction companies. With Bullnose, you get high level financial
            and tech guidance typically reserved for much larger
            companies—without the bloated costs.
          </p>
          <p>
            We&#39;ll handle the numbers, cut the waste, and modernize your
            operations to help you unlock your company&#39;s true potential.
          </p>
        </Content>
      </AboutContainer>
    </Section>
  );
};

export default About;
