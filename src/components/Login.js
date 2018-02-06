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
                <View style={styles.imageBlock}>
                    <Image 
                        source={require('../resources/images/logo.png')}                        
                    />
                </View>
                <Input 
                    maxLength={24}
                    onChangeText={this.props.emailChanged}
                    placeholder='email@email.com'
                    errorMessage={this.props.validation.login}
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
    imageBlock: {
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const mapStateToProps = ({ loginReducer }) => {
    const { email, password, validation } = loginReducer;

    return { email, password, validation };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(Login);
