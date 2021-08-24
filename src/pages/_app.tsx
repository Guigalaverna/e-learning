import {AppProvider} from "../providers/AppProvider";

export default function App({Component, pageProps}) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
