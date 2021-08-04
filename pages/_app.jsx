// import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    position: relative;
    // min-height: 100%;
    // height: 100%;
    // width: 100%;
    background-color: #E4E9F2;
}


`

const theme = {
    colors: {
        primary: {
          ocean: '#03BAFF',
          blue: '#5150E9',
          purple: '#5823E3',
          dark: '#0F0029',
          fadedDark: 'rgba(15, 0, 41, 0.3)',
        },
        text: {
          neutral600: '#333A46',
          neutral400: '#7E8AA4',
          neutral200: '#C5CEE0',
          white: '#FFFFFF'
        },
        status: {
          destructive: '#E13600',
          warning: '#FFB800',
          success: '#049601'
        },
        cards: {
          neutral40: '#F7F9FC',
          neutral60: '#E4E9F2',
        },
        button: {
          primary: '#5823E3',
          disabled: '#E4E9F2'
        },
        grayscale: {
          divider: '#dfe0eb',
        },
      },
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp