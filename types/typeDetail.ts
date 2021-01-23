import { ValidationType, invalidMessages } from '../validator/validatorBase'

export interface TypeDetailBase {
  keyName: string
  displayName: string
  validateMethod?: (value: string, subValue: string) => string[]
}

export const validateMethod = (rule: ValidationType) => (
  value: any,
  subValue?: any
) => {
  return invalidMessages(rule, value, subValue)
}

/**
 * classのプロパティに対して、詳細情報を付与するための型
 * <プロパティ名>Deteil という命名でクラスメソッドを定義してフォームのvalidationなどで利用する
 * @keyName :text
 * @displayName :画面上の表示名
 * @rules :validation設定
 * @placeholder :placeholderの表示内容
 */
export interface TextTypeDetail extends TypeDetailBase {
  placeholder?: string
}
