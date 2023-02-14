import { changeLanguage } from "i18next"
export interface LanguageState {
  language: 'zh' | 'en',
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ]
}

const languageReducer = (state=defaultState, action): LanguageState => {
  const { type, payload } = action
  let newState:LanguageState = defaultState
  if (type === 'language-change') {
    changeLanguage(payload)
    newState = { ...state, language: payload }
  }
  return newState
} 

export default languageReducer
