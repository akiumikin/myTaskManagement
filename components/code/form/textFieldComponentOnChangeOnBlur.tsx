import * as React from "react";
import CodeBase from '../codeBase';
import NoSsr from '@material-ui/core/NoSsr';

// core/form/textformのコード
const codeText = `
export default function TextForm(props: TextFieldProps & Props) {
  const initValue = props.state[props.keyName]
  const [value, setValue] = React.useState({ [props.keyName]: initValue })
  const alreadyChange = React.useRef(false) // これはリアルタイムバリデーションの判定で利用します
  const alreadyBlur = React.useRef(false) // これはリアルタイムバリデーションの判定で利用します

  // onChangeでpropsを更新すると再レンダリングの範囲が広くなるので、コンポーネント内のvalueのみ更新する
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

  // 省略
`

export default function TextFieldComponentOnChangeOnBlurCode() {
  return(
    <NoSsr>
      <CodeBase
        code={codeText}
        language='tsx'
      />
    </NoSsr>
  )
}
