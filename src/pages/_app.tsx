import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from '@/components/layout/loading/index';
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

const App = ({ Component, pageProps }: AppProps) => {
  let url = 'http://127.0.0.1:8000/api/youssef';

  const [data, setData] = useState(false);
  
  useEffect(() => {
      (async ():Promise<void> => {
        let res = await axios.get(url);
        setData(res.data);
      })()
  }, [url]);
  
  if (!data) {
    return <Loading />;
  }else {
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
        <Layout data={ data }>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default App;
