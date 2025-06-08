import React from "react";
import styled from "styled-components";

import BullnoseLogo from "@/icons/BullnoseLogo";

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.tablet} {
    height: 300px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%; /* Make video 10% taller to crop bottom 10% */
  object-fit: cover;
  object-position: center top; /* Position to show top portion and hide bottom 10% */
  z-index: 1;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay for better text readability */
  z-index: 2;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterBar = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.1);

  ${(props) => props.theme.mediaQueries.tablet} {
    padding: 1rem;
  }
`;

const FooterBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem 0;

  ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #333;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`;

const LogoContainer = styled.div`
  svg {
    width: 240px;
    height: auto;

    ${(props) => props.theme.mediaQueries.tablet} {
      width: 100px;
    }
  }
`;

const EmailAddress = styled.a`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #232166;
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/static-assets/video-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <VideoOverlay />

      <FooterContent>
        <FooterBar>
          <FooterBarContent>
            <LogoContainer>
              <BullnoseLogo />
            </LogoContainer>

            <FooterText>
              <EmailAddress href="mailto:contact@bullnoseconsulting.com">
                contact@bullnoseconsulting.com
              </EmailAddress>
              <Copyright>
                © 2024 Bullnose Consulting. All rights reserved.
              </Copyright>
            </FooterText>
          </FooterBarContent>
        </FooterBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
