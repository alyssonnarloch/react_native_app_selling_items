import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './';
import { inputChanged } from '../actions';
import Button from './Button';
import {
    BUTTON_PRIMARY,
    BUTTON_SUCCESS,
} from '../components/types';

class Login extends Component {
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

const mapStateToProps = ({ input }) => {
    const { text } = input;

    return { text };
};

export default connect(mapStateToProps, {
    inputChanged
})(Login);
