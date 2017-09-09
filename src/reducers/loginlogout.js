const initialState = {
  isLogged: false,
  isError: false,
  login: null,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
        isError: false,
        login: action.login
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isError: true,
      }
    case 'LOGOUT':
      return {
        ...initialState
      }
    default:
      return state
  }
}