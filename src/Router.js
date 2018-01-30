import React from 'react';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import Login from './components/Login';
import ProductCreate from './components/ProductCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="global">
                <Scene key="root">
                    <Scene key="login" component={Login} hideNavBar />
                </Scene>
                <Scene key="product" hideNavBar>
                    <Scene key="productCreate" component={ProductCreate} title="Novo produto" hideNavBar={false} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
