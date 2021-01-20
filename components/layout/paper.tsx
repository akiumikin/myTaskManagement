import * as React from "react";
import * as PaperBase from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

interface Props {
  children: React.ReactNode
}

// https://ryotarch.com/javascript/react/get-window-size-with-react-hooks/
export const useWindowDimensions = () => {
  const isClient = typeof window === 'object';

  const getWindowDimensions = React.useCallback(() => {
    return {
      width: isClient ? window?.innerWidth : 0,
      height: isClient ? window?.innerHeight : 0
    };
  }, [isClient]);

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getWindowDimensions]);

  return windowDimensions;
};

export default function Paper(props: Props) {
  return(
    <>
      {/* PC表示 */}
      <Hidden smDown>
        <PaperBase.default style={{padding: 20, margin: '30px auto 30px auto', width: 800}}>
          {props.children}
        </PaperBase.default>
      </Hidden>

      {/* タブレット */}
      <Hidden mdUp xsDown>
        <PaperBase.default style={{padding: 20, margin: '30px auto 30px auto', width: 600, maxWidth: '90%'}}>
          {props.children}
        </PaperBase.default>
      </Hidden>

      {/* 携帯 */}
      <Hidden smUp>
        <PaperBase.default style={{padding: 15, margin: '20px auto 20px auto', width: useWindowDimensions().width * 0.9}}>
          {props.children}
        </PaperBase.default>
      </Hidden>
    </>
  )
}
