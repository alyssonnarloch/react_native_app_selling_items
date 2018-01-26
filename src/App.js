import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from './components';
import Button from './components/Button';
import {
    BUTTON_PRIMARY,
    BUTTON_SUCCESS,
} from './components/types';

class App extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Input placeholder='email@email.com' />
                <Button type={BUTTON_SUCCESS}>Entrar</Button>
                <Button type={BUTTON_PRIMARY}>Visualizar Produtos</Button>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default App;
