import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from './components';

class App extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Input placeholder='email@email.com' />
                <Button>Entrar</Button>
                <Button color='blue'>Visualizar Produtos</Button>
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
