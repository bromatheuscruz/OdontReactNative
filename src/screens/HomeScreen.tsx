import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Styles from "../Styles";
import Strings from "../Strings";
import CardItemRow from "../components/CardItemRow";
import { NavigationScreenProp } from "react-navigation";
import { State } from "react-native-gesture-handler";
import Constants from "../Constants";

interface OwnProps {
  navigation: NavigationScreenProp<State>;
}
type Props = OwnProps;

export default class HomeScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homeContainer}>
        <CardItemRow
          onPress={() =>
            navigation.navigate(Constants.screenRoutes.CONSULTATION)
          }
          iconName={Styles.icons.SCHEDULE}
          spanText={Strings.MY_QUERIES}
        />
        <CardItemRow
          iconName={Styles.icons.ATTACH_MONEY}
          spanText={Strings.FINANCIAL}
        />
        <CardItemRow
          iconName={Styles.icons.IMAGE}
          spanText={Strings.MY_IMAGES}
        />
        <CardItemRow iconName={Styles.icons.CHAT} spanText={Strings.CHAT} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Styles.colors.concrete,
    flex: 1,
    justifyContent: "center",
  },
  optionBlockContainer: {
    backgroundColor: Styles.colors.white,
    borderRadius: 5,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "flex-start"
  },
  spanOptionStyle: {
    fontFamily: Styles.fonts.ubuntuMedium,
    fontSize: 18,
    color: Styles.colors.william
  },
  iconOptionStyle: {
    margin: 10,
    color: Styles.colors.mountainMeadow
  },
  iconContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  spanContainer: {
    flex: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
