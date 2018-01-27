import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './';
import { emailChanged, passwordChanged } from '../actions';
import Button from './Button';
import {
    BUTTON_PRIMARY,
    BUTTON_SUCCESS,
} from '../components/types';

class Login extends Component {
    render() {

        return (
            <View style={styles.viewStyle}>
                <Image 
                    source={require('../resources/images/logo.png')}
                />
                <Input 
                    placeholder='email@email.com' 
                    onChangeText={this.props.emailChanged}
                />
                <Input 
                    placeholder='password' 
                    onChangeText={this.props.passwordChanged}
                />
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
        //justifyContent: 'center',
        alignItems: 'center',
    }
};

const mapStateToProps = ({ login }) => {
    const { email, password } = login;

    return { email, password };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged
})(Login);
