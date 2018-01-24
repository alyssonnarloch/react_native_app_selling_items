import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {
    const { container, text } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={container}>
            <Text style={text}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        alignItems: 'center',
        backgroundColor: '#56bc03',
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
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
};

export { Button };
