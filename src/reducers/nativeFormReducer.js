import { PWD_L4_CHANGE, USER_L4_CHANGE } from "./types";

// 這裡實務上都是會拆開來做管理，在引入要用的頁面邏輯
// action吃的是dispatch(e) 的 e, 所以 e 的資料型別很重要，每次打的東西要和你對應的 case 對上
// ex: 如果 case USER_L4_CHANGE 裡面沒有帶入 value 的值，那這邊就沒辦法寫入 || 修改共用的 state
const nativeFormReducer = (state, action) => {
  switch (action.type) {
    case USER_L4_CHANGE:
      return { ...state, user_l4: action.value }
    case PWD_L4_CHANGE:
      return { ...state, pwd_l4: action.value }
    default:
      return state;
  }
}

export default nativeFormReducer;