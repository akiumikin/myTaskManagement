// actions
import { notify } from '../actions/notify';
// validation libs
import { OptionsObject }                  from 'notistack';
import { checkAlphabet }                  from './lib/alphabet';
import { checkKana }                      from './lib/kana';
import { checkAlphabetAndHyphen }         from './lib/alphabetAndHyphen';
import { checkEmail }                     from './lib/email';
import { checkLengthMax, checkLengthMin } from './lib/length';
import { checkNumberAndHyphen }           from './lib/numberAndHyphen';
import { checkRequire }                   from './lib/require';
import { checkTelephoneNumber }           from './lib/telephoneNumber';
import { checkPostcode }                  from './lib/postcode';

export interface ValidationType {
  require?: boolean           // 必須判定
  lengthMax?: number          // 文字数上限（同値は許容）
  lengthMin?: number          // 文字数下限（同値は許容）
  sameAnotherKeyValue?: string// 他のKeyとの同値判定をする
  numberAndHyphen?: boolean   // 郵便番号などの形式（数字とハイフンのみ）
  alphabet?: boolean          // 英数字のみの形式
  kana?: boolean              // カタカナであること
  alphabetAndHyphen?: boolean // サブドメインなどの形式（英数字＋ハイフン）
  email?: boolean             // Email形式
  birthday?: boolean          // 誕生日入力判定（入力した年と同じ歳の生まれは不正とする）
  canEntryStartedAt?: boolean // 申し込み可能な日付のチェック
  datetime?: boolean          // 日時形式
  postcode?: boolean          // 郵便番号形式 これを選択した場合には文字数制限不要
  telephoneNumber?: boolean   // 電話番号形式 これを選択した場合には文字数制限不要
}

export const invalidMessages = (
  rules: ValidationType,
  value: any,
  subValue?: any, // パスワードの確認など今後に複数の値を比較するときのための引数
) => {
  let messages = [] as string[];

  // 必須判定
  if (rules.require) {
    messages.push(checkRequire(value));
  }

  // 文字数上限
  if (rules.lengthMax) {
    messages.push(checkLengthMax(value, rules.lengthMax));
  }

  // 文字数下限
  if (rules.lengthMin) {
    messages.push(checkLengthMin(value, rules.lengthMin));
  }

  // 数字とハイフンのみ（郵便番号や電話番号形式）
  if (rules.numberAndHyphen) {
    messages.push(checkNumberAndHyphen(value));
  }

  // 英数字とハイフンのみ
  if (rules.alphabetAndHyphen) {
    messages.push(checkAlphabetAndHyphen(value));
  }

  // 英数字のみ
  if (rules.alphabet) {
    messages.push(checkAlphabet(value));
  }

  // カタカナのみ
  if (rules.kana) {
    messages.push(checkKana(value));
  }

  // Email形式
  if (rules.email) {
    messages.push(checkEmail(value));
  }

  // 郵便番号形式
  if (rules.postcode) {
    messages.push(checkPostcode(value));
  }

  // 電話番号形式
  if (rules.telephoneNumber) {
    messages.push(checkTelephoneNumber(value));
  }

  messages = messages.filter((v) => v); // 空文字を除去
  return messages;
};

export const isValid = (
  rules: ValidationType,
  value: any,
  subValue?: any,
) => {
  const invalidMessageArray = invalidMessages(rules, value, subValue)
  return invalidMessageArray === []
}
