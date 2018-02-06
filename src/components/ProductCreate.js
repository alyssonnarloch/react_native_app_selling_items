import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { linkChanged, nameChanged, save } from '../actions';
import { Button, Input } from './';

class ProductCreate extends Component {
    onLinkChanged(text) {
        this.props.linkChanged(text);
    }

    onNameChanged(text) {
        this.props.nameChanged(text);
    }

    onPressCreate() {
        const { name, linkImage } = this.props;

        this.props.save({ name, linkImage });
    }

    render() {
        return (
            <View>
                <Input placeholder="Nome" onChangeText={this.onNameChanged.bind(this)} errorMessage={this.props.validation.name} />
                <Input placeholder="Descrição" multiline numberOfLines={5} />
                <Input placeholder="Link imagem" onChangeText={this.onLinkChanged.bind(this)} errorMessage={this.props.validation.linkImage} />
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
    const { linkImage, name, validation } = productReducer;

    return { linkImage, name, validation };
};

export default connect(mapStateToProps, {
    linkChanged,
    nameChanged,
    save
})(ProductCreate);
