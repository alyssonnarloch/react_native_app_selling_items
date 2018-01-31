import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from './';

class ProductCreate extends Component {
    onPressCreate() {

    }

    render() {
        return (
            <View>
                <Input placeholder="Nome" />
                <Input placeholder="Descrição" multiline numberOfLines={5} />
                <Input placeholder="Link imagem" />
                <Input placeholder="Valor" />
                <Input placeholder="Tipo" />
                <Button onPress={this.onPressCreate.bind(this)}>
                    Salvar
                </Button>
            </View>
        );
    }
}

export default ProductCreate;
