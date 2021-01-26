import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

interface Props {
  keyName: string
  state: any
  setState: React.Dispatch<any>
  validateMethod?: (value: any, subValue?: any) => string[]
}

export default function TextForm(props: TextFieldProps & Props) {
  const initValue = props.state[props.keyName]
  const [value, setValue] = React.useState({ [props.keyName]: initValue })
  const alreadyChange = React.useRef(false)
  const alreadyBlur = React.useRef(false)

  // onChangeでpropsを更新すると再レンダリングの範囲が広くなるので、コンポーネントないのvalueのみ更新する
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(props.onChange != undefined) props.onChange(event)

    alreadyChange.current = true
    setValue({ ...value, [props.keyName]: event.target.value })
  }

  // onBlurではpropsの更新を行う。
  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(props.onBlur != undefined) props.onBlur(event);

    const updateState = { ...props.state, ...value }
    alreadyBlur.current = true
    props.setState(updateState)
  }

  const helperTextWithErrorMessage = () => {
    const enableErrorChack = alreadyChange.current && alreadyBlur.current
    const errorMessages = enableErrorChack && props.validateMethod ? props.validateMethod(value[props.keyName]) : undefined

    return (
      <>
        {props.helperText ? props.helperText : <></>}
        {props.helperText && errorMessages ? <br/> : <></>}
        {errorMessages ? errorMessages.map((message, idx) => {
          return (
            <span key={`validation_message_${props.keyName}_${idx}`} style={{color: '#f44336'}}>
              {idx != 0 ? <br/> : <></>}
              {message}
            </span>
          )
        }) : <></>}
      </>
    )
  }

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
