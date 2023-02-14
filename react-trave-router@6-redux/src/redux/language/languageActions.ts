export const CHANGE_LANGUAGE = 'language-change'

export const changeLanguageCreater = (payload: string) => {
  return {
    type: CHANGE_LANGUAGE,
    payload
  }
}
