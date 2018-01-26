import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
    BUTTON_PRIMARY,
    BUTTON_DANGER,
} from './types';

class Button extends Component {
    setColorStyle() {
        switch (this.props.type) {
            case BUTTON_PRIMARY:
                return styles.containerBlue;
            case BUTTON_DANGER:
                return styles.containerRed;
            default:
                return styles.containerGreen;
        }
    }

    render() {
        const { container, text } = styles;

        return (
            <TouchableOpacity 
                onPress={this.props.onPress} 
                style={[container, this.setColorStyle()]}
            >
                <Text style={text}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
 }

 const styles = {
    container: {        
        alignSelf: 'stretch',
        borderColor: '#adadad',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4
    },
    containerBlue: {
        backgroundColor: 'blue'
    },
    containerGreen: {
        backgroundColor: 'green'
    },
    containerRed: {
        backgroundColor: 'red'
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
};

export default Button;
