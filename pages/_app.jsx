//import '../styles/globals.css'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </div>
    </React.Fragment>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
