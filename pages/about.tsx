import * as React from "react";
import Style from '../styles/About.module.css'
import Paper from '../components/layout/paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function AboutIndex() {
  return(
    <>
      <Paper>
        <Typography variant='h5' gutterBottom>このページに関して</Typography>
        <Typography variant='body1' gutterBottom>
          React + Material-UI を用いて作成したコンポーネントのサンプルページです。
          自社サービスで利用したノウハウなどを集約した学習ページにしていくことが目的です。<br/>
          <br/>
          左上のハンバーガーボタンから各コンポーネントの説明ページに遷移できます。
        </Typography>
      </Paper>

      <Paper>
        <Typography variant='h5' gutterBottom>Github</Typography>
        <Typography variant='body1' gutterBottom>
          <Link href="https://github.com/akiumikin/frontComponent">https://github.com/akiumikin/frontComponent</Link>
        </Typography>
          {/* Repositry Information */}
          <a href="https://github.com/akiumikin/frontComponent/stargazers">
            <img className={Style.badge} alt="Stars" src="https://img.shields.io/github/stars/akiumikin/frontComponent" />
          </a>
          <a href="https://github.com/akiumikin/frontComponent/network/members">
            <img className={Style.badge} alt="Forks" src="https://img.shields.io/github/forks/akiumikin/frontComponent" />
          </a>

          <br/>

          {/* Tool ver */}
          <img className={Style.badge} alt="React" src="https://img.shields.io/badge/React-17.0.1-green" />
          <img className={Style.badge} alt="material-ui" src="https://img.shields.io/badge/material ui-4.11.2-green" />
          <img className={Style.badge} alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.1.3-green" />
          <img className={Style.badge} alt="Next.js" src="https://img.shields.io/badge/Next.js-10.0.5-green" />
      </Paper>

      <Paper>
        <Typography variant='h5' gutterBottom>作者</Typography>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img className={Style.githubStats} src="https://github-readme-stats.vercel.app/api?username=akiumikin&count_private=true&show_icons=true" />
        </a>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=akiumikin" />
        </a>
      </Paper>
    </>
  )
}
