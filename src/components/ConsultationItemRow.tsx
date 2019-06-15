import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../Styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ConsultationMarked } from "../models/ConsultationMarked";

interface Props {
  consultation: ConsultationMarked;
}

export default class ConsultationItemRow extends Component<Props> {
  render() {
    const { consultation } = this.props;
    return (
      <TouchableOpacity style={styles.itemRowContainer}>
        <View style={styles.statusContainer}>
          <Icon
            name={Styles.icons.DONE}
            color={Styles.colors.cornflowerBlue}
            size={30}
          />
        </View>
        <View style={styles.primaryInfoContainer}>
          <Text style={styles.consultationType}>{consultation.type}</Text>
          <Text style={styles.doctor}>{consultation.doctor}</Text>
        </View>
        <View style={styles.secondaryInfoContainer}>
          <Text style={styles.bolder}>{consultation.day}</Text>
          <Text style={styles.bolder}>{consultation.hour}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  itemRowContainer: {
    flexDirection: "row",
    backgroundColor: Styles.colors.white,
    borderWidth: 1,
    borderColor: Styles.colors.concrete,
    marginVertical: 2,
    height: 80,
    alignItems: "center"
  },
  primaryInfoContainer: {
    flex: 4,
    alignItems: "center"
  },
  secondaryInfoContainer: {
    flex: 4,
    alignItems: "center"
  },
  consultationType: {
    fontFamily: Styles.fonts.ubuntuBold,
    color: Styles.colors.mountainMeadow,
    fontSize: 14
  },
  statusContainer: {
    flex: 2,
    backgroundColor: Styles.colors.concrete,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  doctor: {
    fontFamily: Styles.fonts.ubuntuRegular,
    fontSize: 14
  },
  bolder: {
    fontFamily: Styles.fonts.ubuntuRegular,
    fontSize: 14
  }
});
