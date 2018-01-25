import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, color = '#56bc03', onPress }) => {
    const { container, text } = styles;

    container.backgroundColor = color;

    return (
        <TouchableOpacity onPress={onPress} style={container}>
            <Text style={text}>{children}</Text>
        </TouchableOpacity>
    );
};

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
        marginButton: 4
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
};

export { Button };
