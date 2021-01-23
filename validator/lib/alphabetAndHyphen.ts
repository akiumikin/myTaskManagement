export const checkAlphabetAndHyphen = (str: string): string => {
  if (str === '' || str === undefined || str == null) return ''; // 未入力の場合にはエラー判定しない

  const result = str.toString().match(/^[a-z0-9\-]+$/)
  return result ? '' : '英数字またはハイフンのみが使用できます'
}
