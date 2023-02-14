import { changeLanguage } from "i18next"
import { CHANGE_LANGUAGE } from "./languageActions"
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

interface Action {
  type: string,
  payload: any
}

const languageReducer = (state=defaultState, action: Action): LanguageState => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_LANGUAGE:
      changeLanguage(payload)
      const newState = { ...state, language: payload }
      return newState
    default:
      return state
  }
} 

export default languageReducer
