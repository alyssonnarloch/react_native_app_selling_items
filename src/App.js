import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDAPUgdDV3eBWCfXbbcDm6njvan8thKz9M',
            authDomain: 'react-native-selling-items.firebaseapp.com',
            databaseURL: 'https://react-native-selling-items.firebaseio.com',
            projectId: 'react-native-selling-items',
            storageBucket: 'react-native-selling-items.appspot.com',
            messagingSenderId: '157306148249'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
