import React from "react";
import Head from "next/head";
import Contact from "../components/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Bullnose Consulting</title>
        <meta
          name="description"
          content="Get in touch with Bullnose Consulting. Let's discuss how we can help you achieve your business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Contact />
    </>
  );
};

export default ContactPage;
