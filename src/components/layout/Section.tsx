import React from "react";
import styled from "styled-components";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
  id?: string;
}

const SectionContainer = styled.section<{
  $backgroundColor?: string;
  $backgroundImage?: string;
}>`
  width: 100%;
  padding: 4rem 2rem;
  background-color: ${(props) => props.$backgroundColor || "white"};
  background-image: ${(props) =>
    props.$backgroundImage ? `url(${props.$backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 2.5rem 1rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding: 2rem 1rem;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  backgroundImage,
  className,
  id,
}) => {
  return (
    <SectionContainer
      $backgroundColor={backgroundColor}
      $backgroundImage={backgroundImage}
      className={className}
      id={id}
    >
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
