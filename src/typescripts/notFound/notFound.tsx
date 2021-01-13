import * as React from "react";
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <>
      <h1>ページが見つかりません。工事中コンテンツの可能性があります。</h1>
      <div><Link to='/'>Topに戻る</Link></div>
    </>
  );
}
