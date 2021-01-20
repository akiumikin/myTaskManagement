import * as React from "react";
import TextForm from '../../core/form/textForm';
import Paper from '../../components/layout/paper';
import GridForSample from '../../components/layout/gridForSample';
import ChipList from '../../components/chip/chipList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TextFieldComponentCode from '../../components/code/form/textFieldComponent'

export default function Text() {

  const [sample, setSample] = React.useState({basic_text1: '', basic_text2: '', basic_text3: ''})

  return(
    <>
      {/* トップコンテンツ */}
      <Paper>
        <Typography variant='h5' gutterBottom>このページに関して</Typography>
        <Typography variant='body1' gutterBottom>
          入力フォームの内でテキスト入力をするものに関連する内容をまとめていきます。<br/>
          下記はこのページのコンポーネントの関連項目です。
        </Typography>

        <Divider light style={{marginBottom: 10}}/>

        <Typography variant='subtitle1' gutterBottom>【material-ui】</Typography>
        <ChipList
          chipItems={[
            {
              id: 'top_text_field',
              label: "Text Field",
              color: "primary",
              clickable: true,
              onClick: () => { window.open('https://material-ui.com/components/text-fields/', '_blank') }
            },
            {
              id: 'top_snackbars',
              label: "snackbars",
              color: "primary",
              clickable: true,
              onClick: () => { window.open('https://material-ui.com/components/snackbars/', '_blank') }
            },
            {
              id: 'top_material_icons',
              label: "material icons",
              color: "primary",
              clickable: true,
              onClick: () => { window.open('material-ui.com/components/material-icons/', '_blank') }
            },
          ]}
        />

        <Typography variant="subtitle1" gutterBottom style={{marginTop: 10}}>【その他】</Typography>
        <ChipList
          chipItems={[
            {
              id: 'top_axios',
              label: "axios",
              color: "secondary",
            },
            {
              id: 'top_realtime_validation',
              label: "リアルタイムバリデーション",
              color: "secondary",
            },
            {
              id: 'top_typescript_class',
              label: "TypeScript Class",
              color: "secondary",
            },
            {
              id: 'top_material_icons',
              label: "material icons",
              color: "secondary",
            },
          ]}
        />
      </Paper>

      {/* コンポーネント思想 */}
      <Paper>
        <Typography variant='h5' gutterBottom>コンポーネント構成</Typography>
        <GridForSample>
          <Grid item xs={4}>
            <TextForm
              id='basic_text1'
              label='Outlined'
              placeholder='placeholder'
              keyName='basic_text1'
              state={sample}
              setState={setSample}
            />
          </Grid>
          <Grid item xs={4}>
            <TextForm
              id='basic_text2'
              label='Standard'
              placeholder='placeholder'
              keyName='basic_text2'
              variant='standard'
              state={sample}
              setState={setSample}
            />
          </Grid>
          <Grid item xs={4}>
            <TextForm
              id='basic_text3'
              label='Filled'
              placeholder='placeholder'
              keyName='basic_text3'
              variant='filled'
              state={sample}
              setState={setSample}
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

      {/* 利用方法１、リアルタイムバリデーション */}

      {/* 利用方法２、特殊入力 */}

      {/* 利用方法３、tooltip */}

      {/* 利用方法４、複数行 */}
    </>
  )
}
