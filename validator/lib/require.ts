export const checkRequire = (value: string | number): string => {
  if (value === '' || value === undefined || value == null) return '必須項目です'

  return ''
}
