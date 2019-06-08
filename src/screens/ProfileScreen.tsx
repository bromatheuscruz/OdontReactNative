import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { User } from '../models/User'
import Styles from '../Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Strings from '../Strings';

interface Props { }
interface State {
    identity: User;
}

export default class ProfileScreen extends Component<Props, State> {

    state = {
        identity: {
            name: 'Matheus',
            age: 24,
            email: 'bromatheuscruz@gmail.com',
            fullName: 'Matheus Henrique de Sousa Cruz',
            lastName: 'Cruz'
        }
    }

    render() {

        const { identity } = this.state;
        return (
            <View style={styles.profileContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/avatar-icon-free-15.jpg')}
                            style={styles.imageStyle} />
                    </View>
                    <View style={styles.profileInfoContainer}>
                        <Text style={styles.spanNameStyle}>{`${identity.name} ${identity.lastName}`}</Text>
                        <Text>{identity.email}</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.optionRowStyle}>
                        <Text style={styles.spanRowTextStyle}>{Strings.CHANGE_PASSWORD}</Text>
                        <Icon
                            name={Styles.icons.NAVIGATE_NEXT}
                            size={30}
                            color={Styles.colors.gray}
                            style={styles.iconOptionStyle} />
                    </View>
                    <View style={styles.optionRowStyle}>
                        <Text style={styles.spanRowTextStyle}>{Strings.SEND_FEEDBACK}</Text>
                        <Icon
                            name={Styles.icons.NAVIGATE_NEXT}
                            size={30}
                            color={Styles.colors.gray}
                            style={styles.iconOptionStyle} />
                    </View>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.optionRowStyle}>
                        <Text style={styles.spanRowTextStyle}>{Strings.LOGOUT}</Text>
                        <Icon
                            name={Styles.icons.EXIT_TO_APP}
                            size={30}
                            color={Styles.colors.gray}
                            style={styles.iconOptionStyle} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: Styles.colors.concrete
    },
    topContainer: {
        flex: 4,
    },
    bottomContainer: {
        flex: 5,
    },
    imageContainer: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        borderRadius: 200,
        height: 120,
        width: 120,
        borderWidth: 1,
        borderColor: Styles.colors.cornflowerBlue
    },
    profileInfoContainer: {
        alignItems: 'center',
        paddingTop: 10
    },
    spanNameStyle: {
        fontFamily: Styles.fonts.ubuntuBold,
        fontSize: 16,
        color: Styles.colors.mountainMeadow
    },
    spanEmailStyle: {
        fontFamily: Styles.fonts.ubuntuRegular,
        fontSize: 14,
        color: Styles.colors.gray
    },
    optionRowStyle: {
        backgroundColor: Styles.colors.white,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderColor: Styles.colors.alabaster,
        borderWidth: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    iconOptionStyle: {
        margin: 10,
        color: Styles.colors.mountainMeadow,
        marginHorizontal: 5
    },
    spanRowTextStyle: {
        fontFamily: Styles.fonts.ubuntuRegular,
        fontSize: 16
    },
    footerContainer: {
        flex: 1
    }
});