import * as React from "react";
import TextForm from '../../core/form/textForm';
import TextAbout from '../../components/pages/textAbout';
import TextComponent from '../../components/pages/textComponent';
import Paper from '../../components/layout/paper';
import GridForSample from '../../components/layout/gridForSample';
import TextFieldComponentCode from '../../components/code/form/textFieldComponent'
import SampleData from '../../types/sampleData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Text() {

  const [sample, setSample] = React.useState({basic_text1: '', basic_text2: '', basic_text3: ''})
  const dataBase = new SampleData
  const [data, setData] = React.useState(new SampleData)

  return(
    <>
      {/* トップコンテンツ */}
      <TextAbout />

      {/* コンポーネント構成 */}
      <TextComponent/>

      {/* コンポーネント思想 */}
      <Paper>
        <Typography variant='h5' gutterBottom>利用例１ リアルタイムバリデーション</Typography>
        <GridForSample>
          <Grid item xs={12} sm={6}>
            <TextForm
              id={dataBase.telephoneNumberDetail().keyName}
              label={dataBase.telephoneNumberDetail().displayName}
              placeholder={dataBase.telephoneNumberDetail().placeholder}
              keyName={dataBase.telephoneNumberDetail().keyName}
              state={data}
              setState={setData}
              helperText='半角・全角の数字及びハイフンが入力可能、初回のエラー判定はonBlurで判定されそれ以降はOnChangeで判定されます'
              validateMethod={dataBase.telephoneNumberDetail().validateMethod}
            />
          </Grid>
        </GridForSample>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>概要</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'block'}}>
            <Typography>
              Material-UIの<a href='https://material-ui.com/components/text-fields/' rel='noopener' target='_blank'>Text Field</a>をラップしたコンポーネントを作成しています。
              ラップの目的としては下記の機能を組み込むためです。
            </Typography>
            <ol>
              <li>デフォルトのvalientの変更（Standerd → Outliend）など独自スタイルの適用</li>
              <li>TypeScriptのClassを使ったstateのプロパティの更新</li>
              <li>リアルタイムバリデーション機能の組み込み</li>
            </ol>
            <Typography>詳細はデモコードの解説をご覧ください。</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>デモコード</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'block'}}>
            <TextFieldComponentCode/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>デモコードの解説</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              工事中
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>参考リンク</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              工事中
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* 利用方法２、特殊入力 */}

      {/* 利用方法３、tooltip */}

      {/* 利用方法４、複数行 */}
    </>
  )
}
