import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { View } from "react-native";
import ConsultationItemRow from "../components/ConsultationItemRow";
import { FlatList, State } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as ConsultationActions from "../store/ducks/consultation/actions";
import { NavigationScreenProp } from "react-navigation";
import { ApplicationState } from "../store";
import { ConsultationMarked } from "../models/ConsultationMarked";

interface StateProps {
  consultations: ConsultationMarked[];
  hasError: boolean;
  loading: boolean;
}

interface OwnProps {
  navigation: NavigationScreenProp<State>;
}

interface DispatchToProps {
  consultationRequest(id: string): void;
}

type Props = StateProps & OwnProps & DispatchToProps;

class ConsultationScreen extends Component<Props> {
  componentDidMount() {
    const { consultationRequest } = this.props;
    consultationRequest("5d03e38509f6cb00172e2195");
  }

  render() {
    const { consultations } = this.props;

    return (
      <View>
        <FlatList
          data={consultations}
          renderItem={({ item }) => <ConsultationItemRow consultation={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  consultations: state.consultation.data,
  hasError: state.consultation.hasError,
  loading: state.consultation.loading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ConsultationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsultationScreen);
