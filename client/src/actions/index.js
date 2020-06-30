import * as types from './types'
import streams from '../apis/streams'

export const SignIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  }
}

export const SignOut = () => {
  return {
    type: types.SIGN_OUT,
  }
}

export const createStream = (formValues) => async (dispatch) => {
  const res = await streams.post('/streams', formValues)
}
