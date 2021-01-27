import * as React from "react";
import * as PaperBase from '@material-ui/core/Paper';
import Style from '../../styles/general.module.css';

interface Props {
  children: React.ReactNode
}

export default function Paper(props: Props) {
  return(
    <>
      <PaperBase.default className={Style.paper} >
        {props.children}
      </PaperBase.default>
    </>
  )
}
