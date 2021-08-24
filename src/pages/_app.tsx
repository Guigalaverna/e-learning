import {AppProvider} from "../providers/AppProvider";

export default function App({Component, pageProps}) {
  return (
    <AppProvider session={pageProps.session}>
      <Component {...pageProps} />
    </AppProvider>
  );
}
