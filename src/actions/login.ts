import axios from 'axios';
import { types } from '../constants';
// /** *
//  * @param string newEmailAddress
//  */
// export const changeEmailAddress = newEmailAddress => ({
//   type: types.CHANGE_EMAIL_ADDRESS,
//   payload: newEmailAddress,
// });

// /** *
//  * @param string newPassword
//  */
// export const changePassword = newPassword => ({
//   type: types.CHANGE_PASSWORD,
//   payload: newPassword,
// });

/** *
 * @param Object loginInfo
 * @param String nextComponent - next component step to show
 */
export const login = loginInfo => async (dispatch) => {
  dispatch(loginLoad());
  try {
    console.log('loginInfo', loginInfo);
    const loginInfo2 = {
      email_address: 'sunny.wong+9@backatyou.com',
      password: 'fuckyoudude',
    };
    const results = await axios.post('https://nervous-mole-56.localtunnel.me/api/v2/login', loginInfo2);
    console.log('heres results login ', results);
  } catch (err) {
    console.log('err', err.message);
  }
};

const loginLoad = () => ({
  type: types.LOGIN_LOAD,
});

const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

const loginFail = () => ({
  type: types.LOGIN_FAIL,
});
