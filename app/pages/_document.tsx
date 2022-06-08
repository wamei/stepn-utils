import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/, Head } from 'blitz'
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
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
