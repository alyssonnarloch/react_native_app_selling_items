import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class Input extends Component {
    getStyle(errorMessage) {
        if (typeof (errorMessage) === 'undefined' || errorMessage === '') {
            return [styles.input];
        }
        return [styles.input, styles.inputWithError];
    }

    displayErrorMessage(message) {
        if (typeof (message) !== 'undefined' && message !== '') {
            return (
                <Text style={styles.errorMessage}>
                    {message}
                </Text>
            );
        }
    }

    render() {
        return (
            <View>
                <TextInput 
                    autoCorrect={this.props.autoCorrect}
                    maxLength={this.props.maxLength}
                    multiline={this.props.multiline}
                    numberOfLines={this.props.numberOfLines}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder} 
                    placeholderTextColor='#c6c6c6' 
                    secureTextEntry={this.props.secure}
                    value={this.props.value}
                    style={this.getStyle(this.props.errorMessage)}
                />

                {this.displayErrorMessage(this.props.errorMessage)}
            </View>
        );
    }
}

const styles = {
    input: {
        alignSelf: 'stretch',
        fontSize: 20,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        textAlignVertical: 'top'
    },
    inputWithError: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 6
    },
    errorMessage: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 8,
        marginTop: 1,
        color: 'red'
    }
};

export { Input };
