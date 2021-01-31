import * as React from "react";
import CodeBase from '../codeBase';
import NoSsr from '@material-ui/core/NoSsr';

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
      error={props.error == undefined ? errorMessages.length != 0 : props.error}
      fullWidth={props.fullWidth == undefined ? true : props.fullWidth}
      variant={props.variant == undefined ? 'outlined' : props.variant}
    />
  );
}
`

export default function TextFieldComponentCode() {
  return(
    <NoSsr>
      <CodeBase
        code={codeText}
        language='tsx'
      />
    </NoSsr>
  )
}
