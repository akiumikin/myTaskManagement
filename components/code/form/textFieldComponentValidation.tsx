import * as React from "react";
import dynamic from "next/dynamic";

const AvoidSSRCodeBase = dynamic(
  () => import('../codeBase'),
  {ssr: false}
)

// core/form/textformのコード
const codeText = `
export default function TextForm(props: TextFieldProps & Props) {
  const initValue = props.state[props.keyName]
  const [value, setValue] = React.useState({ [props.keyName]: initValue })
  const alreadyChange = React.useRef(false)
  const alreadyBlur = React.useRef(false)

  // 中略

  const helperTextWithErrorMessage = () => {
    const enableErrorChack = alreadyChange.current && alreadyBlur.current
    const errorMessages = enableErrorChack && props.validateMethod ? props.validateMethod(value[props.keyName]) : undefined

    return (
      <>
        {props.helperText ? props.helperText : <></>}
        {props.helperText && errorMessages ? <br/> : <></>}
        {errorMessages ? errorMessages.map((message, idx) => {
          return (
            <span key={\`validation_message_\${props.keyName}_\${idx}\`} style={{color: '#f44336'}}>
              {idx != 0 ? <br/> : <></>}
              {message}
            </span>
          )
        }) : <></>}
      </>
    )
  }

  // 省略
`

export default function TextFieldComponentValidationCode() {
  return(
    <AvoidSSRCodeBase
      code={codeText}
      language='tsx'
    />
  )
}
