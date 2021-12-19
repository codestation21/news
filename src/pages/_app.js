import { ThemeProvider } from 'theme-ui';
import Theme from 'Theme';
import 'typeface-roboto';
import { wrapper } from "Redux/Store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default wrapper.withRedux(MyApp);
