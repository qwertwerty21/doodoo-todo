import * as React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const DismissKeyboardHOC = WrappedComponent => ({ children, ...props }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		<WrappedComponent {...props}>{children}</WrappedComponent>
	</TouchableWithoutFeedback>
);
export const DismissKeyboardView = DismissKeyboardHOC(View);
