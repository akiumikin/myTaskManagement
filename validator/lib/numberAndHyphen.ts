export const checkNumberAndHyphen = (str: string): string => {
  if (str === '' || str === undefined || str == null) return ''; // 未入力の場合にはエラー判定しない

  const result = str.toString().match(/^[0-9\-]*$/)
  return result ? '' : '数字とハイフンのみが使用できます'
}
