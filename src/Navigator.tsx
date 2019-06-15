import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import OdontHeader from "./components/OdontHeader";
import ProfileScreen from "./screens/ProfileScreen";
import Constants from "./Constants";
import ConsultationScreen from "./screens/ConsultationScreen";

const LoginStack = createStackNavigator({ Login: LoginScreen });

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Consultation: ConsultationScreen
  },
  {
    initialRouteName: Constants.screenRoutes.HOME_SCREEN,
    defaultNavigationOptions: ({ navigation }) => ({
      header: <OdontHeader navigation={navigation} />
    })
  }
);

const Navigator = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    mainStack: { screen: MainStack }
  },
  {
    initialRouteName: "loginStack",
    headerMode: "none"
  }
);

export default createAppContainer(Navigator);
