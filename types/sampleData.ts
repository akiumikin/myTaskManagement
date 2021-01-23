////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * formのサンプルに使用する変数の型定義
 */
////////////////////////////////////////////////////////////////////////////////////////////////////

import { validateMethod, TextTypeDetail } from './typeDetail'

export default class SampleData {
  className: string

  telephoneNumber?: string
  telephoneNumberDetail(): TextTypeDetail {
    return ({
      keyName: 'telephoneNumber',
      displayName: '電話番号',
      validateMethod: validateMethod({ telephoneNumber: true }),
      placeholder: '000-0000-0000'
    })
  }

  /** 初期値設定 */
  constructor() {
    this.className = 'SampleData'
  }
}
