import React from 'react';
import { AppProps } from 'next/app';
import { PersistentDrawerLeft } from '../core/layout/persistentDrawer';
import { Sidemenu } from '../components/layout/sidemenu';

const App = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <PersistentDrawerLeft
      sidemenu={<Sidemenu/>}
      mainContent={<Component {...pageProps} />}
    />
  )
}

export default App
