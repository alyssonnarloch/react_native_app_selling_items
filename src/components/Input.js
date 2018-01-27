import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ onChangeText, placeholder, value }) => {
    return (
        <TextInput 
            autoCorrect={false}
            style={styles} 
            placeholder={placeholder} 
            placeholderTextColor='#c6c6c6' 
            value={value}
            onChangeText={onChangeText}
        />
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
