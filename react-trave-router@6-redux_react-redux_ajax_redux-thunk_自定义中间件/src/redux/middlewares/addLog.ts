import { Middleware } from "redux"

const addLog:Middleware = (store) => (next) => (action) => {
  console.log('当前 state：', store.getState())
  console.log('action：', action)
  next(action)
  console.log('修改后的 state：', store.getState())
}

export default addLog