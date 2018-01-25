import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder }) => {
    return (
        <TextInput style={styles} placeholder={placeholder} placeholderTextColor='#c6c6c6' />
    );
};

const styles = {
    alignSelf: 'stretch',
    fontSize: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4
};

export { Input };
