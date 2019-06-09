import React, { Component } from 'react';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';


interface Props { }
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={undefined} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}