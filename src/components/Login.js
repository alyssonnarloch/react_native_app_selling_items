import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Content, Input } from './';
import { emailChanged, passwordChanged, loginUser } from '../actions';
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
            <Content>
                <Image 
                    source={require('../resources/images/logo.png')}
                    style={styles.image}
                />
                <Input 
                    maxLength={24}
                    onChangeText={this.props.emailChanged}
                    placeholder='email@email.com' 
                />
                <Input 
                    maxLength={12}
                    onChangeText={this.props.passwordChanged}
                    placeholder='password' 
                    secure
                />
                <Button 
                    onPress={this.onPressSignIn.bind(this)}
                    type={BUTTON_SUCCESS} 
                >
                    Entrar
                </Button>
                <Button type={BUTTON_PRIMARY}>Visualizar Produtos</Button>
            </Content>
        );
    }
}

const styles = {
    image: {
        justifyContent: 'center',
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
