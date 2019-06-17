import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Styles from "../Styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  iconName: string;
  spanText: string;
  onPress?(): void;
}
interface State {}

export default class CardItemRow extends Component<Props, State> {
  render() {
    const { iconName, spanText, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.optionBlockContainer}>
          <View style={styles.iconContainer}>
            <Icon
              name={iconName}
              size={30}
              color={Styles.colors.gray}
              style={styles.iconOptionStyle}
            />
          </View>
          <View style={styles.spanContainer}>
            <Text style={styles.spanOptionStyle}>{spanText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  optionBlockContainer: {
    backgroundColor: Styles.colors.white,
    borderRadius: 5,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 1.5,
    justifyContent: "flex-start"
  },
  iconOptionStyle: {
    margin: 10,
    color: Styles.colors.mountainMeadow
  },
  spanOptionStyle: {
    fontFamily: Styles.fonts.ubuntuMedium,
    fontSize: 18,
    color: Styles.colors.william
  },
  spanContainer: {
    flex: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  iconContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});
