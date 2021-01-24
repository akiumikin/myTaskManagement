import * as React from "react";
import Paper from '../layout/paper';
import ChipList from '../chip/chipList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function TextAbout() {
  return(
    <>
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
          ]}
        />
      </Paper>
    </>
  )
}
