import * as React from "react";
import Style from '../../styles/general.module.css'
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  code: string
  language: string
  fileName?: string
}

export default function CodeBase(props: Props) {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    Prism.highlightAll();

    if(window.innerWidth < 600) {
      setWidth(window.innerWidth * 0.75) // スマホサイズ
    } else if(window.innerWidth < 960) {
      setWidth(450) // タブレットサイズ
    } else {
      setWidth(700) // PC
    }
  }, []);

  return(
    <>
      {props.fileName ? <p className={Style.prismTitle}>{props.fileName}</p> : <></>}
      <pre style={{width: width, margin: '0 auto'}}>
        <code className={`language-${props.language}`}>
          {props.code}
        </code>
      </pre>
    </>
  )
}
