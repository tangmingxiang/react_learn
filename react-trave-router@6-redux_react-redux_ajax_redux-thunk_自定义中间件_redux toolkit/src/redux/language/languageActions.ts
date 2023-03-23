export const CHANGE_LANGUAGE = 'language-change'
export const ADD_LANGUAGE = 'language-add'

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: {
    name: string,
    code: string
  }
}

export type languageActionTypes = ChangeLanguageAction | AddLanguageAction

export const changeLanguageActionCreater = (payload: 'zh' | 'en'): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload
  }
}
