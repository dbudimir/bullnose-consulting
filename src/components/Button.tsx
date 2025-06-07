import styled from "styled-components";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  size?: ButtonSize;
  text: string;
  onClick?: () => void;
  color?: string;
}

const sizeConfig = {
  sm: {
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    cornerWidth: "20px",
    cornerHeight: "10px",
    borderWidth: "2px",
    cornerRadius: "8px",
    offset: "4px",
  },
  md: {
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    cornerWidth: "25px",
    cornerHeight: "12px",
    borderWidth: "3px",
    cornerRadius: "12px",
    offset: "6px",
  },
  lg: {
    fontSize: "1.25rem",
    padding: "1rem 2rem",
    cornerWidth: "30px",
    cornerHeight: "15px",
    borderWidth: "4px",
    cornerRadius: "16px",
    offset: "8px",
  },
};

const StyledButton = styled.button<{ $size: ButtonSize; $color: string }>`
  font-family: "Helvetica", Arial, sans-serif;
  font-size: ${({ $size }) => sizeConfig[$size].fontSize};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;

  background: ${({ $color }) => $color};
  color: white;
  border: none;
  padding: ${({ $size }) => sizeConfig[$size].padding};
  cursor: pointer !important;
  transition: all 0.2s ease;
  width: max-content;
  border-radius: 2px;
  border-top-right-radius: ${({ $size }) => sizeConfig[$size].cornerRadius};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(35, 33, 102, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export default function Button({
  size = "md",
  text,
  onClick,
  color = "#98b21d",
}: ButtonProps) {
  return (
    <StyledButton $size={size} $color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
