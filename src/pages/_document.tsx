import { Component } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

class Document extends Component {
 render() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-signin-client_id" content="804061669567-vcop39e0hsrhmp05bfb6vksu1ogoithj.apps.googleusercontent.com" />
        <meta name="theme-color" content="#fff" />
        <title> YOUSSEF </title>
        <link rel="icon" href="/assets/images/logo/favicon/favicon.ico"/>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/images/logo/logo.png"></link>
        <script src="/assets/js/client.js" async defer></script> 
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/main.js"></script>
      </body>
    </Html>
  )
 }
}

export default Document;
