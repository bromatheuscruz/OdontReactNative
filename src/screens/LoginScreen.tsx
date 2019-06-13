import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ViewStyle, AsyncStorage } from "react-native";
import { NavigationScreenConfig, NavigationScreenOptions, NavigationScreenProp } from 'react-navigation';
import Styles from "../Styles";
import Strings from "../Strings";
import { LoginData } from '../models/LoginData';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as IdentityActions from './../store/ducks/identity/actions';
import Constants from "../Constants";
import { IdentityUser } from "../store/ducks/identity/types";

interface StateProps {
    identity: IdentityUser;
    loading: boolean;
    hasError: boolean;
}

interface DispatchProps {
    authRequest(data: LoginData): void;
}

interface OwnProps {
    navigation: NavigationScreenProp<State>;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
    user: LoginData;
    canSubmitForm: boolean;
}

class LoginScreen extends Component<Props, State> {

    state = {
        user: {
            email: 'bromatheuscruz@gmail.com',
            password: '123456'
        },
        canSubmitForm: true
    }

    static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = { header: null };
    private passwordInput!: TextInput;

    async componentDidMount() {
        const { navigation } = this.props;
        const token = await AsyncStorage.getItem(Constants.storageItems.TOKEN);
        if (token) {
            navigation.navigate(Constants.stacks.HOME);
        }
    }

    componentDidUpdate() {
        const { identity, navigation } = this.props;
        if (identity && identity.id) {
            navigation.navigate(Constants.stacks.HOME);
        }
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
        const { authRequest } = this.props;
        const { user } = this.state;
        authRequest(user);
    }

    render() {
        const { user, canSubmitForm } = this.state;
        const { loading } = this.props;
        const getOpacityByFormStatus = (): ViewStyle => ({ opacity: canSubmitForm && !loading ? 1 : 0.5  });

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
});

const mapStateToProps = (state: ApplicationState) => ({
    identity: state.identity.data.user,
    loading: state.identity.loading,
    hasError: state.identity.hasError
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(IdentityActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);