import { types } from '../constants';

const INITIAL_STATE = {
  emailAddress: '',
  password: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: action.payload,
      };
    case types.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}
