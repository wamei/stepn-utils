import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from 'blitz'
import React from 'react'

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang='en'>
        <DocumentHead>
          <title>STEPN utils</title>
          <link rel='shortcut icon' href='/stepn-utils/favicon.ico' />
          <meta name='description' content='STEPN役立ちツール' />
        </DocumentHead>
        <body>
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2TWG4C');
`,
            }}
          />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
