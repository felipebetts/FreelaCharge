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
}


`

const theme = {
    colors: {
        primary: '#54DEFD',
        secondary: '#00BD9D',
        tertiary: '#49C6E5',
        fourth: '#8BD7D2',
        white: '#FFFBFA',
        dark: '#0F0029',
        text: {
            neutral600: '#333A46',
            neutral400: '#7E8AA4',
            neutral200: '#C5CEE0',
            white: '#FFFFFF'
        },
        button: {
            primary: '#5823E3',
            disabled: '#E4E9F2'
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