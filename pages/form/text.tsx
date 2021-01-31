import * as React from "react";
import TextAbout from '../../components/pages/textAbout';
import TextComponent from '../../components/pages/textComponent';
import TextValidation from '../../components/pages/textValidation';

export default function Text() {
  return(
    <>
      {/* トップコンテンツ */}
      <TextAbout/>

      {/* コンポーネント構成 */}
      <TextComponent/>

      {/* 利用方法１、バリデーション */}
      <TextValidation/>

      {/* 利用方法２、DBの値の初期入力 */}

      {/* 利用方法３、特殊入力 */}

      {/* 利用方法４、tooltip */}

      {/* 利用方法５、複数行 */}
    </>
  )
}
