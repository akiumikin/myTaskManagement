import * as React from "react";
import CodeBase from '../codeBase';
import NoSsr from '@material-ui/core/NoSsr';

// core/form/textformのコード
const ImportCodeText = `
import * as React from "react";
import TextForm from '../../core/form/textForm';
import SampleData from '../../types/sampleData';
`

const CallCodeText = `
export default function TextValidation() {
  const dataBase = new SampleData
  const [data, setData] = React.useState(new SampleData)

  return(
    <>
      <TextForm
        id={dataBase.freeTextMax5Detail().keyName}
        label={dataBase.freeTextMax5Detail().displayName}
        placeholder={dataBase.freeTextMax5Detail().placeholder}
        keyName={dataBase.freeTextMax5Detail().keyName}
        state={data}
        setState={setData}
        validateMethod={dataBase.freeTextMax5Detail().validateMethod}
      />
    </>
  )
}
`

export function TextFieldComponentValidationDemoImportCode() {
  return(
    <NoSsr>
      <CodeBase
        code={ImportCodeText}
        language='tsx'
      />
    </NoSsr>
  )
}

export function TextFieldComponentValidationDemoCallCode() {
  return(
    <NoSsr>
      <CodeBase
        code={CallCodeText}
        language='tsx'
      />
    </NoSsr>
  )
}
