import * as React from "react";
import Style from '../../styles/general.module.css'
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  code: string
  language: string
  fileName: string
}

export default function CodeBase(props: Props) {

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return(
    <>
      <p className={Style.prismTitle}>{props.fileName}</p>
      <pre style={{width: '100%'}}>
        <code className={`language-${props.language}`}>
          {props.code}
        </code>
      </pre>
    </>
  )
}
