////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * formのサンプルに使用する変数の型定義
 */
////////////////////////////////////////////////////////////////////////////////////////////////////

import { validateMethod, TextTypeDetail } from './typeDetail'

export default class SampleData {
  className: string

  freeTextMax5?: string
  freeTextMax5Detail(): TextTypeDetail {
    return ({
      keyName: 'freeTextMax5',
      displayName: 'フリーテキスト',
      validateMethod: validateMethod({ lengthMax: 5 }),
      placeholder: '5文字以内の入力のみ可能'
    })
  }

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
