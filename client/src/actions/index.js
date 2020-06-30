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
  const response = await streams.post('/streams', formValues)

  dispatch({ type: types.CREATE_STREAM, payload: response.data })
}
