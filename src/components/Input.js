import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ 
    maxLength = 255, 
    multiline = false, 
    numberOfLines = 1, 
    onChangeText, 
    placeholder, 
    secure = false, 
    value 
}) => {
    return (
        <TextInput 
            autoCorrect={false}
            style={styles} 
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            placeholder={placeholder} 
            placeholderTextColor='#c6c6c6' 
            secureTextEntry={secure}
            value={value}
        />
    );
};

const styles = {
    alignSelf: 'stretch',
    fontSize: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    textAlignVertical: 'top'
};

export { Input };
