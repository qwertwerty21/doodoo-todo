import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as t from 'tcomb-form-native';
import { login } from '../actions';
import { DismissKeyboardView } from '../components';
// import { changeEmailAddress } from '../actions/login';

const POOP_IMAGE = require('../../assets/poop.png');

const { Form } = t.form;
const LoginModel = t.struct({
  emailAddress: t.String,
  password: t.String,
});
const LoginModelOptions = {
  fields: {
    emailAddress: {
      // you can use strings or JSX
      error: 'Invalid email',
    },
    password: {
      error: 'Invalid password',
    },
  },
};
// // Enable LayoutAnimation on Android
// UIManager.setLayoutAnimationEnabledExperimental
//   && UIManager.setLayoutAnimationEnabledExperimental(true);
interface Props {
	actions: any;
	login: any;
}
class LoginScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  // _handleEmailAddressChange = (value) => {
  //   this.props.actions.changeEmailAddress(value);
  // };

  // _handlePasswordChange = (value) => {
  //   this.props.actions.changePassword(value);
  // };

	_handleLogin = () => {
	  const value = this.refs.form.getValue();
	  if (value) {
	    console.log('value', value);
	    this.props.actions.login(value);
	  }
	};

	render() {
	  return (
			<DismissKeyboardView>
				{/* <ImageBackground source={BG_IMAGE} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}> */}
				<KeyboardAvoidingView behavior="position">
					<View style={styles.headerContainer}>
						<Text h1>DooDoo Todo</Text>
						<Image source={POOP_IMAGE} style={styles.poopImage} />
					</View>
					<View style={styles.inputsContainer}>
						<Form ref="form" type={LoginModel} options={LoginModelOptions} />
						{/* <Input
							leftIcon={<Icon name="envelope-o" size={25} />}
							leftIconContainerStyle={styles.leftIconContainer}
							value={this.props.login.emailAddress}
							autoFocus={false}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							returnKeyType="next"
							placeholder={'Email'}
							onChangeText={this._handleEmailAddressChange}
						/>
						<Input
							leftIcon={<Icon name="lock" size={25} />}
							leftIconContainerStyle={styles.leftIconContainer}
							value={this.props.login.password}
							secureTextEntry={true}
							autoFocus={false}
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="default"
							returnKeyType="done"
							placeholder={'Password'}
							onChangeText={this._handlePasswordChange}
						/> */}
					</View>
					<View>
						<Button title={'Login'} onPress={this._handleLogin} />
					</View>
				</KeyboardAvoidingView>
				{/* </ImageBackground> */}
			</DismissKeyboardView>
	  );
	}
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //   changeEmailAddress: bindActionCreators(login.changeEmailAddress, dispatch),
      //   changePassword: bindActionCreators(login.changePassword, dispatch),
      login: bindActionCreators(login.login, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  poopImage: {
    width: 100,
    height: 100,
  },
  inputsContainer: {
    marginTop: 15,
    marginBottom: 25,
  },
  leftIconContainer: {
    marginRight: 10,
  },
});
