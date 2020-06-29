import * as types from './types'

export const SignIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId
  }
}

export const SignOut = () => {
  return {
    type: types.SIGN_OUT,
  }
}
