
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
    newState = { ...state, language: payload }
  }
  console.log(newState)
  return newState
} 

export default languageReducer
