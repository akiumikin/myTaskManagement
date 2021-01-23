export const checkTelephoneNumber = (str: string): string => {
  if (str === '' || str === undefined || str == null) return ''; // 未入力の場合にはエラー判定しない

  const result = str.match(/^[0-9０-９\-\ー]*$/)
  return result ? '' : '電話番号の形式のみ入力可能です（例 000-0000-0000）'
}
