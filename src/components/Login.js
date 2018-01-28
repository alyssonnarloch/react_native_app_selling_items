import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import Button from './Button';
import {
    BUTTON_PRIMARY,
    BUTTON_SUCCESS,
} from '../components/types';

class Login extends Component {
    onPressSignIn() {
        const { email, password } = this.props;

        return this.props.loginUser({ email, password });
    }

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
                <Button type={BUTTON_SUCCESS} onPress={this.onPressSignIn.bind(this)}>Entrar</Button>
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

const mapStateToProps = ({ loginReducer }) => {
    const { email, password } = loginReducer;

    return { email, password };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(Login);
