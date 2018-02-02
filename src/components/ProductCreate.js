import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, save } from '../actions';
import { Button, Input } from './';

class ProductCreate extends Component {
    onNameChanged(text) {
        this.props.nameChanged(text);
    }

    onPressCreate() {
        const { name } = this.props;

        this.props.save({ name });
    }

    render() {
        return (
            <View>
                <Input placeholder="Nome" onChangeText={this.onNameChanged.bind(this)} errorMessage={this.props.validation.name} />
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

const mapStateToProps = ({ productReducer }) => {
    const { name, validation } = productReducer;

    return { name, validation };
};

export default connect(mapStateToProps, {
    nameChanged,
    save
})(ProductCreate);
