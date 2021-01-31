import * as React from "react";
import TextForm from '../../core/form/textForm';
import Paper from '../../components/layout/paper';
import GridForSample from '../../components/layout/gridForSample';
import TextFieldComponentCode from '../../components/code/form/textFieldComponent';
import { TextFieldComponentValidationDemoImportCode, TextFieldComponentValidationDemoCallCode } from '../../components/code/form/textFieldComponentValidationDemo'
import SampleData from '../../types/sampleData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function TextValidation() {
  const dataBase = new SampleData
  const [data, setData] = React.useState(new SampleData)

  return(
    <>
      <Paper>
        <Typography variant='h5' gutterBottom>利用例１ リアルタイムバリデーション</Typography>
        <GridForSample>
          <Grid item xs={12} sm={6}>
            <TextForm
              id={dataBase.freeTextMax5Detail().keyName}
              label={dataBase.freeTextMax5Detail().displayName}
              placeholder={dataBase.freeTextMax5Detail().placeholder}
              keyName={dataBase.freeTextMax5Detail().keyName}
              state={data}
              setState={setData}
              validateMethod={dataBase.freeTextMax5Detail().validateMethod}
            />
          </Grid>
        </GridForSample>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>デモコードおよび解説</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'block'}}>
            <Typography gutterBottom>
              まず、コンポーネントの構成の項目で記載したコンポーネント及び利用するサンプルデータのデータ型のimportを行います。
            </Typography>
            <TextFieldComponentValidationDemoImportCode/>
            <Typography gutterBottom style={{marginTop: 20}}>
              コンポーネントの呼び出し時に、validateMethodを指定することでonBlur・onChangeの際にエラーの判定を行います。validateMethodは引数としてフォームの入力値を受けてstringの配列を返す構造を想定しています。詳しくはメニューのvalidationの項目を参照ください。
            </Typography>
            <TextFieldComponentValidationDemoCallCode/>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  )
}
