import React from "react";
import styled from "styled-components";

interface SplitSectionProps {
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  className?: string;
  id?: string;
}

const SplitContainer = styled.section<{
  $backgroundColor?: string;
}>`
  width: 100%;
  background-color: ${(props) => props.$backgroundColor || "white"};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content-side image-side";
  position: relative;
  min-height: 100%;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
`;

const ContentSide = styled.div`
  grid-area: content-side;
  background: transparent;
  min-height: 100%;

  @media (max-width: 968px) {
    width: 100%;
    min-height: auto;
  }
`;

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  z-index: 10;

  > * {
    width: 100%;
    max-width: 1200px;
  }

  @media (max-width: 968px) {
    grid-column: auto;
    grid-row: auto;
    padding: 2.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const ImageSide = styled.div<{ $imageSrc: string }>`
  grid-area: image-side;
  background-image: url(${(props) => props.$imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;

  @media (max-width: 968px) {
    width: 100%;
    min-height: 300px;
    order: -1;
  }

  @media (max-width: 480px) {
    min-height: 250px;
  }
`;

const SplitSection: React.FC<SplitSectionProps> = ({
  children,
  imageSrc = "/static-assets/hero-image.png",
  imageAlt = "Section background image",
  backgroundColor,
  className,
  id,
}) => {
  return (
    <SplitContainer
      $backgroundColor={backgroundColor}
      className={className}
      id={id}
    >
      <ContentSide />
      <ImageSide $imageSrc={imageSrc} role="img" aria-label={imageAlt} />
      <ContentContainer>{children}</ContentContainer>
    </SplitContainer>
  );
};

export default SplitSection;
