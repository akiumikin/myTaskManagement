import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

interface Props {
  keyName: string
  state: any
  setState: React.Dispatch<any>
  validateMethod?: () => boolean
}

export default function TextForm(props: TextFieldProps & Props) {
  const initValue = props.state[props.keyName]
  const [value, setValue] = React.useState({ [props.keyName]: initValue })
  const already_blur = React.useRef(false)

  // onChangeでpropsを更新すると再レンダリングの範囲が広くなるので、コンポーネントないのvalueのみ更新する
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(props.onChange != undefined) props.onChange(event)

    setValue({ ...value, [props.keyName]: event.target.value })
  }

  // onBlurではpropsの更新を行う。
  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(props.onBlur != undefined) props.onBlur(event);

    const updateState = { ...props.state, ...value }
    already_blur.current = true
    props.setState(updateState)
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
      fullWidth={props.fullWidth == undefined ? true : props.fullWidth}
      variant={props.variant == undefined ? 'outlined' : props.variant}
    />
  );
}
