import React, {Component} from 'react';
import {
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import SplashApp from './SplashApp';

const store = configureStore();

class RootApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <SplashApp/>
            </Provider>
        )
    }
}
export default RootApp;