import LogoMark from "@/icons/LogoMark";
import styled, { css } from "styled-components";

type LogoSize = "xsm" | "sm" | "md" | "lg";
type LogoVariant = "stacked" | "row" | "logomark";

interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  animateLogo?: boolean;
}

const sizeConfig = {
  xsm: {
    fontSize: "1.125rem",
    padding: "0.5625rem",
    cornerWidth: "22px",
    cornerHeight: "11px",
    borderWidth: "2px",
    cornerRadius: "9px",
    offset: "4.5px",
  },
  sm: {
    fontSize: "1.5rem",
    padding: "0.5rem",
    cornerWidth: "25px",
    cornerHeight: "12px",
    borderWidth: "3px",
    cornerRadius: "12px",
    offset: "6px",
  },
  md: {
    fontSize: "3rem",
    padding: "1rem",
    cornerWidth: "40px",
    cornerHeight: "20px",
    borderWidth: "4px",
    cornerRadius: "20px",
    offset: "10px",
  },
  lg: {
    fontSize: "4rem",
    padding: "1.5rem",
    cornerWidth: "50px",
    cornerHeight: "25px",
    borderWidth: "5px",
    cornerRadius: "25px",
    offset: "12px",
  },
};

const LogoContainer = styled.h1<{ $size: LogoSize; $variant: LogoVariant }>`
  font-family: "Helvetica", Arial, sans-serif;
  font-size: ${({ $size, $variant }) => {
    const baseSize = sizeConfig[$size].fontSize;
    // Make logomark variant 1.5x bigger
    if ($variant === "logomark") {
      const sizeValue = parseFloat(baseSize);
      const unit = baseSize.replace(/[\d.]/g, "");
      return `${sizeValue * 1.5}${unit}`;
    }
    return baseSize;
  }};
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  position: relative;
  width: fit-content;

  /* Custom border styling */
  display: flex;
  flex-direction: ${({ $variant }) =>
    $variant === "row" || $variant === "logomark" ? "row" : "column"};
  align-items: center;
  justify-content: center;
  gap: ${({ $variant, $size }) =>
    $variant === "row" || $variant === "logomark"
      ? sizeConfig[$size].fontSize === "1.125rem"
        ? "0.25rem"
        : sizeConfig[$size].fontSize === "1.5rem"
        ? "0.375rem"
        : sizeConfig[$size].fontSize === "3rem"
        ? "0.75rem"
        : "1rem"
      : "0"};
  z-index: 1;
`;

const LogoText = styled.div<{ $animateLogo?: boolean; $size: LogoSize }>`
  display: flex;
  flex-direction: inherit;
  align-items: inherit;
  justify-content: inherit;
  gap: inherit;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  max-width: 16px;
  padding: 0;
  box-sizing: content-box;

  @keyframes fadeInGrow {
    0% {
      opacity: 0;
      max-width: 16px;
      padding: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      max-width: 300px;
      padding: ${({ $size }) => sizeConfig[$size].padding};
      transform: translateX(0);
    }
  }

  ${({ $animateLogo }) =>
    $animateLogo &&
    css`
      animation: fadeInGrow 0.8s ease-out 0.25s forwards;
    `}
`;

const HeavyText = styled.span<{ $size: LogoSize }>`
  font-weight: 900;
  display: block;
  letter-spacing: 0.025em;
  line-height: 1;
  padding-top: 0.125 rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 0.9em;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 0.8em;
  }
`;

const LightText = styled.span<{ $size: LogoSize }>`
  font-weight: 300;
  display: block;
  letter-spacing: -0.05em;
  line-height: 1;
  padding-top: 0.125rem;

  ${(props) => props.theme.mediaQueries.tablet} {
    font-size: 0.9em;
  }

  ${(props) => props.theme.mediaQueries.mobile} {
    font-size: 0.8em;
  }
`;

const LogoMarkWrapper = styled.div<{ $size: LogoSize; $variant: LogoVariant }>`
  height: ${({ $size, $variant }) => {
    const baseSize = sizeConfig[$size].fontSize;
    const sizeValue = parseFloat(baseSize);
    const unit = baseSize.replace(/[\d.]/g, "");

    // Make logomark variant 1.5x bigger to match text scaling
    const multiplier = $variant === "logomark" ? 1.25 : 1;
    // Make height same as the font size with line-height applied
    return `${sizeValue * multiplier}${unit}`;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  margin-left: 0.25rem;

  svg {
    height: 100%;
    width: auto;
  }
`;

export default function Logo({
  size = "md",
  variant = "stacked",
  animateLogo = false,
}: LogoProps) {
  return (
    <LogoContainer $size={size} $variant={variant}>
      <LogoText $animateLogo={animateLogo} $size={size}>
        <HeavyText $size={size}>
          {variant === "logomark" ? "B" : "Bullnose"}
        </HeavyText>
        <LightText $size={size}>
          {variant === "logomark" ? "C" : "Consulting"}
        </LightText>
        <LogoMarkWrapper $size={size} $variant={variant}>
          <LogoMark />
        </LogoMarkWrapper>
      </LogoText>
    </LogoContainer>
  );
}
