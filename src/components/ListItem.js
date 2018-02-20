import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListItem extends Component {
    render() {
        const { name, description, linkImage, price, type } = this.props.product;

        return (
            <View>
                <Text style={styles.title}>{name}</Text>
            </View>
        );
    }
}

const styles = {
    title: {
        fontSize: 20
    }
};

export default ListItem;
