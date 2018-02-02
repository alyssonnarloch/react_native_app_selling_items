import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class Input extends Component {
    displayErrorMessage(message) {
        if (typeof (message) !== 'undefined' && message !== '') {
            console.log(message);
            return (
                <Text>
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
                    style={styles} 
                    maxLength={this.props.maxLength}
                    multiline={this.props.multiline}
                    numberOfLines={this.props.numberOfLines}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder} 
                    placeholderTextColor='#c6c6c6' 
                    secureTextEntry={this.props.secure}
                    value={this.props.value}
                />

                {this.displayErrorMessage(this.props.errorMessage)}
            </View>
        );
    }
}

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
