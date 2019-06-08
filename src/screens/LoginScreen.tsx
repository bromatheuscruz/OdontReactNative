import React, { Component } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ViewStyle
} from "react-native";
import {
    NavigationScreenConfig,
    NavigationScreenOptions,
    NavigationActions,
    StackActions,
    NavigationScreenProp
} from 'react-navigation';
import Styles from "../Styles";
import Strings from "../Strings";
import { LoginUserData } from '../models/LoginUserData'

interface Props { 
    navigation: NavigationScreenProp<State>;
}

interface State {
    user: LoginUserData;
    canSubmitForm: boolean;
}

export default class LoginScreen extends Component<Props, State> {

    state = {
        user: {
            email: 'bromatheuscruz@gmail.com',
            password: 'matheus.cruz1'
        },
        canSubmitForm: true
    }

    static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = { header: null };
    private passwordInput!: TextInput;

    componentDidMount() {

    }

    private onEmailChangeHandler = (value: string): void => {
        const { user } = this.state;

        const formStatus = !!(value && user.password);

        this.setState({ user: { ...user, email: value }, canSubmitForm: formStatus });
    }

    private onPasswordChangeHandler = (value: string): void => {
        const { user } = this.state;

        const formStatus = !!(value && user.email);

        this.setState({ user: { ...user, password: value }, canSubmitForm: formStatus });
    }

    private onLoginPressHandler = (): void => {
        const { navigation } = this.props;
        navigation.push('mainStack')
    }


    render() {
        const { user, canSubmitForm } = this.state;
        const getOpacityByFormStatus = (): ViewStyle => ({ opacity: canSubmitForm ? 1 : 0.5 })

        return (
            <View style={styles.loginScreen}>
                <View style={styles.topContainer}>
                    <Text style={styles.logoStyle}>Odont</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.spanTextStyle}>{Strings.EMAIL}</Text>
                        <TextInput
                            style={styles.inputTextStyle}
                            returnKeyType='next'
                            onChangeText={this.onEmailChangeHandler}
                            value={user.email}
                            onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.spanTextStyle}>{Strings.PASSWORD}</Text>
                        <TextInput
                            style={styles.inputTextStyle}
                            textContentType={'password'}
                            secureTextEntry
                            value={user.password}
                            onChangeText={this.onPasswordChangeHandler}
                            returnKeyType={'done'}
                            ref={(input: TextInput) => {
                                this.passwordInput = input;
                            }}
                            onSubmitEditing={this.onLoginPressHandler}
                        />
                    </View>
                    <TouchableOpacity 
                        onPress={this.onLoginPressHandler}
                        disabled={!canSubmitForm}
                        >
                        <View style={[styles.buttonStyle, getOpacityByFormStatus()]}>
                            <Text style={styles.spanTextButtonStyle}>{Strings.ENTER}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.forgotPasswordContainer}>
                        <Text style={styles.forgotPassword} >{Strings.FORGOT_PASSWORD}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
    },
    topContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 6,
        paddingHorizontal: 30,
    },
    logoStyle: {
        fontSize: 50,
        fontFamily: Styles.fonts.ubuntuBoldItalic,
        color: Styles.colors.cornflowerBlue
    },
    inputContainer: {
        margin: 5
    },
    inputTextStyle: {
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        color: Styles.colors.gray,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Styles.colors.white,
        borderColor: Styles.colors.gray,
        fontFamily: Styles.fonts.ubuntuRegular
    },
    spanTextStyle: {
        fontFamily: Styles.fonts.ubuntuBold,
        fontSize: 14,
        color: Styles.colors.mountainMeadow
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: Styles.colors.mountainMeadow,
        borderRadius: 5,
        height: 52,
        justifyContent: 'center',
        marginTop: 10,
    },
    forgotPassword: {
        fontFamily: Styles.fonts.ubuntuBold,
        fontSize: 16,
        color: Styles.colors.mountainMeadow,
    },
    spanTextButtonStyle: {
        fontFamily: Styles.fonts.ubuntuBold,
        fontSize: 16,
        color: Styles.colors.concrete
    },
    forgotPasswordContainer: {
        marginTop: 30,
        alignSelf: 'center'
    }
})