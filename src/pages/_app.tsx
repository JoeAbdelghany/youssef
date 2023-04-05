import { Component } from "react";
import Layout from '@/components/layout/layout';
import '@/styles/globals.scss';
import '@/styles/layout/logo/logo.scss';
import '@/styles/layout/header/header.scss';
import '@/styles/layout/main/main.scss';
import '@/styles/layout/scrollBtn/scrollBtn.scss';
import '@/styles/layout/footer/footer.scss';
import '@/styles/layout/socialMedia/socialMedia.scss';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

// interface Props {
//   Component: AppProps;
//   pageProps: AppProps;
//   data: any;
// };
// class App extends Component<Props> {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//       </>
//     );
//   }
// }
function App({ Component, pageProps }: AppProps,) {
    return (
      <>
        <NextNProgress 
          color="var(--mc)" 
          startPosition={0.3} 
          stopDelayMs={200} 
          height={2} 
          showOnShallow={false} 
          options={{ easing: 'ease', speed: 500 }} 
        />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
