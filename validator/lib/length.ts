export const checkLengthMax = (str: string, lengthMax: number): string => {
  if (str === '' || str === undefined || str == null) return ''; // 未入力の場合にはエラー判定しない

  return str.toString().length <= lengthMax ? '' : `入力可能な文字数は${lengthMax}文字以下です`
}

export const checkLengthMin = (str: string, lengthMin: number) => {
  if (str === '' || str === undefined) return ''; // 未入力の場合にはエラー判定しない

  return str.toString().length >= lengthMin ? '' : `入力可能な文字数は${lengthMin}文字以上です`
}
