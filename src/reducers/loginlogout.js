const initialState = {
  isLogged: false,
  isError: false,
  isAwaitLogin: false,
  login: null,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'AWAIT_LOGIN':
      return {
        ...state,
        isAwaitLogin: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        isError: false,
        login: action.login,
        isAwaitLogin: false,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isError: true,
        isAwaitLogin: false,
      }
    case 'LOGOUT':
      return {
        ...initialState
      }
    default:
      return state
  }
}