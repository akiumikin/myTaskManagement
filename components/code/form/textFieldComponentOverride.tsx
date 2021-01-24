import * as React from "react";
import dynamic from "next/dynamic";

const AvoidSSRCodeBase = dynamic(
  () => import('../codeBase'),
  {ssr: false}
)

// core/form/textformのコード
const codeText = `
export default function TextForm(props: TextFieldProps & Props) {
  // 省略

  let attributes = {}
  for (const key in props) {
    if(!['keyName', 'state', 'setState', 'validateMethod'].includes(key)) {
      attributes[key] = props[key]
    }
  }

  return (
    <TextField
      {...attributes}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperTextWithErrorMessage()}
      fullWidth={props.fullWidth == undefined ? true : props.fullWidth}
      variant={props.variant == undefined ? 'outlined' : props.variant}
    />
  );
}
`

export default function TextFieldComponentCode() {
  return(
    <AvoidSSRCodeBase
      code={codeText}
      language='tsx'
    />
  )
}
