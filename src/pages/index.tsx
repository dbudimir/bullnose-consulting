import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  position: relative;

  /* Custom border styling */
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 20px;
    border: 4px solid navy;
    background: transparent;
    z-index: 0;

    @media (max-width: 480px) {
      width: 30px;
      height: 15px;
      border-width: 3px;
    }
  }

  /* Top-right: rounded corner - pushed out */
  &::before {
    top: -10px;
    right: -10px;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 20px;

    @media (max-width: 480px) {
      border-top-right-radius: 15px;
      top: -8px;
      right: -8px;
    }
  }

  /* Bottom-left: square corner - green - pushed out */
  &::after {
    bottom: -10px;
    left: -10px;
    border-top: none;
    border-right: none;
    border-color: green;

    @media (max-width: 480px) {
      bottom: -8px;
      left: -8px;
    }
  }
`;

const HeavyText = styled.span`
  font-weight: 900;
  display: block;
  letter-spacing: 0.025em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const LightText = styled.span`
  font-weight: 300;
  display: block;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Bullnose Consulting</title>
        <meta name="description" content="Bullnose Consulting " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>
          <HeavyText>Bullnose</HeavyText>
          <LightText>Consulting</LightText>
        </Title>
      </Container>
    </>
  );
}
