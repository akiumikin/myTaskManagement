export const checkKana = (str: string): string => {
  if (str === '' || str === undefined || str == null) return ''; // 未入力の場合にはエラー判定しない

  const result = str.toString().match(/^[a-zA-Zァ-ヶー　]*$/)
  // セイメイのカナの判定では外国の人がアルファベットも入力するのでアルファベットも例外的に許可
  return result ? '' : 'カタカナおよびアルファベットのみが使用できます'
}
