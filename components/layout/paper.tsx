import * as React from "react";
import * as PaperBase from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

interface Props {
  children: React.ReactNode
}

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
        <PaperBase.default style={{padding: '20px 5%', margin: '30px auto 30px auto', width: 600, maxWidth: '90%'}}>
          {props.children}
        </PaperBase.default>
      </Hidden>

      {/* 携帯 */}
      <Hidden smUp>
        <PaperBase.default style={{padding: '15px 5%', margin: '20px auto 20px auto', width: '95%', minWidth: 400}}>
          {props.children}
        </PaperBase.default>
      </Hidden>
    </>
  )
}
