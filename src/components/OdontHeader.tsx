import React, { Component } from "react";
import { NavigationScreenProp, NavigationRoute, NavigationParams } from "react-navigation";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from "../Styles";
import Constants from "../Constants";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
    navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
}

export default class OdontHeader extends Component<Props> {

    onPressSettingIconHandler = (): void => {
        this.props.navigation.navigate(Constants.screenRoutes.PROFILE_SCREEN)
    };

    render(): React.ReactNode {

        const { navigation } = this.props;
        return (
            <View style={styles.headerContainer}>
                <StatusBar backgroundColor={Styles.colors.white} barStyle='dark-content'></StatusBar>
                <Text style={styles.logo}>{Constants.app.NAME}</Text>
                <Text style={styles.headerTitle}>{navigation.state.routeName.toUpperCase()}</Text>
                <TouchableOpacity onPress={this.onPressSettingIconHandler}>
                    <Icon
                        name={Styles.icons.SETTINGS}
                        size={25}
                        color={Styles.colors.mountainMeadow}
                        style={styles.barStyle} />
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    logo: {
        color: Styles.colors.william,
        fontSize: 16,
        fontFamily: Styles.fonts.ubuntuBold
    },
    barStyle: {
        margin: 16
    },
    headerTitle: {
        fontFamily: Styles.fonts.ubuntuRegular,
        fontSize: 16,
        color: Styles.colors.william
    }
});