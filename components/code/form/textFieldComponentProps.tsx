import * as React from "react";
import CodeBase from '../codeBase';
import NoSsr from '@material-ui/core/NoSsr';

// core/form/textformのコード
const codeText = `
interface Props {
  keyName: string
  state: any
  setState: React.Dispatch<any>
  validateMethod?: (value: any, subValue?: any) => string[]
}
`

export default function TextFieldComponentPropsCode() {
  return(
    <NoSsr>
      <CodeBase
        code={codeText}
        language='tsx'
      />
    </NoSsr>
  )
}
