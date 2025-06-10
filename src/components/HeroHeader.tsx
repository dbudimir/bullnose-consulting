import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import { scrollToAnchor } from "../helpers/scrollToAnchor";

const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  border-radius: 5px 30px 5px 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 1.5rem 2rem;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    padding: 1rem 1.5rem;
  }

  /* Optional: Add a subtle overlay for better text readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 75%
    );
    border-radius: 5px 30px 5px 5px;
    z-index: 1;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px 30px 5px 5px;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0 0 1rem 0;
    line-height: 0.9;

    ${(props) => props.theme.mediaQueries.tablet} {
      font-size: 2.5rem;
    }

    ${(props) => props.theme.mediaQueries.mobile} {
      font-size: 2rem;
    }
  }

  p {
    letter-spacing: 0.05em;
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

export default function HeroHeader() {
  return (
    <HeroContainer>
      <HeroImageWrapper>
        <StyledImage
          src="/static-assets/hero.png"
          alt="Hero background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
        <ContentWrapper>
          <h1>Get control of your cash flow</h1>
          <p>
            Financial clarity and modern tools, backed by decades of real-world
            construction and finance experience, built specifically for
            contractors.
          </p>
          <Button
            text="Contact Us"
            size="md"
            onClick={() => scrollToAnchor("contact")}
          />
        </ContentWrapper>
      </HeroImageWrapper>
    </HeroContainer>
  );
}
