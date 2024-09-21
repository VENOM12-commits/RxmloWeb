import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="sunucunla uraşmaktan korumaktan bıktımı? o zaman Rxmlo tam sana gore +80 slash komutlu Rxmlo 6 tane koruma sistemine sahip Rxmlo katıl!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Rxmlo" />
          <meta name="twitter:creator" content="@Rxmo" />
          <meta property="og:url" content="https://rxmlo-web.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rxmlo" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="sunucunla uraşmaktan korumaktqn bıktımı? o zaman Rxmlo tam sana gore +80 slash komutlu Rxmlo 6 tane koruma sistemine sahip Rxmlo katıl!"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Rxmlo" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Rxmlo"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
