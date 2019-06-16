import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../Styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  ConsultationMarked,
  ConsultationStatus,
  ConsultationTypes
} from "../models/ConsultationMarked";
import Constants from "../Constants";

interface Props {
  consultation: ConsultationMarked;
}

export default class ConsultationItemRow extends Component<Props> {
  private resolveIcon = (): string => {
    const { consultation } = this.props;
    switch (consultation.status) {
      case ConsultationStatus.FINISHED:
        return Styles.icons.DONE;
      case ConsultationStatus.SCHEDULE:
        return Styles.icons.SCHEDULE;
      case ConsultationStatus.MISSED:
        return Styles.icons.CLEAR;
      default:
        return Styles.icons.SCHEDULE;
    }
  };

  private resolveType = (): string => {
    const { consultation } = this.props;
    switch (consultation.type) {
      case ConsultationTypes.MAINTENANCE:
        return "MANUTENÇÂO";
      case ConsultationTypes.EVALUATION:
        return "AVALIAÇÂO";
      default:
        return "MANUTENÇÂO";
    }
  };
  render() {
    const { consultation } = this.props;
    return (
      <View style={styles.itemRowContainer}>
        <View style={styles.statusContainer}>
          <Icon
            name={this.resolveIcon()}
            color={Styles.colors.cornflowerBlue}
            size={30}
          />
        </View>
        <View style={styles.primaryInfoContainer}>
          <Text style={styles.consultationType}>{this.resolveType()}</Text>
          <Text style={styles.doctor}>{consultation.doctor.name}</Text>
        </View>
        <View style={styles.secondaryInfoContainer}>
          <Text style={styles.bolder}>{consultation.day}</Text>
          <Text style={styles.bolder}>{consultation.hour}</Text>
        </View>
      </View>
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
