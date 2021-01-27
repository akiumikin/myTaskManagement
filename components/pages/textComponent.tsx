import * as React from "react";
import TextForm from '../../core/form/textForm';
import Paper from '../layout/paper';
import GridForSample from '../layout/gridForSample';
import TextFieldComponentCode from '../code/form/textFieldComponent';
import TextFieldComponentPropsCode from '../code/form/textFieldComponentProps';
import TextFieldComponentOnChangeOnBlurCode from "../code/form/textFieldComponentOnChangeOnBlur";
import TextFieldComponentValidationCode from "../code/form/textFieldComponentValidation";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function TextComponent() {

  const [sample, setSample] = React.useState({basic_text1: '', basic_text2: '', basic_text3: ''})

  return(
    <>
      <Paper>
        <Typography variant='h5' gutterBottom>コンポーネント構成</Typography>
        <GridForSample>
          <Grid item xs={12} sm={4}>
            <TextForm
              id='basic_text1'
              label='Outlined'
              placeholder='placeholder'
              keyName='basic_text1'
              state={sample}
              setState={setSample}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
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
            <Typography>詳細はデモコード及びデモコードの解説をご覧ください。</Typography>
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
          <AccordionDetails style={{display: 'block'}}>
            <Typography variant='h6' gutterBottom>引数</Typography>
            <Typography gutterBottom>このコンポーネントは下記の引数を持ちます。</Typography>
            <Typography variant='subtitle1'>keyName</Typography>
            <Typography style={{marginLeft: 20}} gutterBottom>更新すべきプロパティの特定で使用します。</Typography>
            <Typography variant='subtitle1'>state</Typography>
            <Typography style={{marginLeft: 20}} gutterBottom>TypeScriptで定義されたclassを使って作成したstateが入ります。classは複数のプロパティを持ちデータベースの1テーブルや1画面のフォームの要素など用途のまとまったプロパティを持つ想定です。</Typography>
            <Typography variant='subtitle1'>setState</Typography>
            <Typography style={{marginLeft: 20}} gutterBottom>stateと合わせて定義されたsetStateです。</Typography>
            <Typography variant='subtitle1'>validationMethod</Typography>
            <Typography style={{marginLeft: 20}} gutterBottom>リアルタイムバリデーションに使用する関数です。この関数は引数に value: any を受け取り、エラーがあった際には string[] を返す想定です。この関数をonBlur及びonChangeの画面の再レンダリングの際に実行してエラーメッセージの表示を行います。</Typography>
            <TextFieldComponentPropsCode/>
            <Typography variant='h6' gutterBottom style={{marginTop: 40}}>state更新</Typography>
            <Typography>このコンポーネントではpropsで受け取ったstateとコンポーネント内で定義したstate(value)が存在します。その理由としては、propsを常時onChangeにて更新すると上位のコンポーネントでも再レンダリングが発生するため、フォームの入力中はフォームで使用したstateを利用してレンダリング範囲を狭めています。</Typography>
            <Typography>onChangeとonBlur時の処理は下記となります。それぞれのstateの更新とリアルタイムバリデーションのためのrefの更新を行っています。</Typography>
            <TextFieldComponentOnChangeOnBlurCode/>
            <Typography variant='h6' gutterBottom style={{marginTop: 40}}>リアルタイムバリデーション</Typography>
            {/* TODO: ValidationがまとまったらLinkにする */}
            <Typography>リアルタイムバリデーションの表示はpropsから渡されたvalidationMethodとtextFieldのhelperTextを利用します。validationMethodはメニューのvalidationの項目を参考ください。</Typography>
            <Typography>また、onChangeとonBlurの実行状況によってエラー判定の実行を制限しています。これはメールアドレスや入力文字数下限などが設定されていると、正しく入力しているのにエラーが表示されてストレスになるため、1度でも入力を行った（onChange）後にフォーカスを外した（onBlur）後からエラーの判定を開始するようにしています。</Typography>
            <Typography>加えて、propsからhelperTextを受け取っていた際には、そのメッセージはデフォルトの表示をして、エラーメッセージに関しては赤字で表示するようにしています。</Typography>
            <TextFieldComponentValidationCode/>
            <Typography variant='h6' gutterBottom style={{marginTop: 40}}>TextFieldのOverride</Typography>
            <Typography>引数の型を TextFieldProps & Props としているため、Material-UIのPropsと独自のPropsの和集合がこのコンポーネントのPropsとなります。しかしそのままMaterial-UIにコンポーネントのPropsを渡すとエラーとなるため、呼び出しの直前でコンポーネントのPropsから独自のPropsを除外しています。</Typography>
            <Typography>他にも、上位コンポーネントからのpropsが渡されているかを確認して、渡されていなかった時の値（＝デフォルト値）の設定をしています。</Typography>
            <Typography>onChangeとOnBlurに関しては、上位のコンポーネントから渡されても独自の関数が入っているので無視される構成です。onChangeとonBlurの関数の処理の中でpropsを引き継げば実行も可能ですが、特に用途が見つからなかったため無視する構成としています。</Typography>
            <TextFieldComponentValidationCode/>
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
    </>
  )
}
