import * as React from "react";
import dynamic from "next/dynamic";

const AvoidSSRCodeBase = dynamic(
  () => import('../codeBase'),
  {ssr: false}
)

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
    <AvoidSSRCodeBase
      code={codeText}
      language='tsx'
    />
  )
}
