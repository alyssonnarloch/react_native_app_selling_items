import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from './components';


class App extends Component {
    render() {
        return (
            <View>
                <Input placeholder='email@email.com' />
                <Button>Entrar</Button>
            </View>
        );
    }
}

export default App;
