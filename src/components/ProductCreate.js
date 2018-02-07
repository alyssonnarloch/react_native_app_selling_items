import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, descriptionChanged, linkChanged, priceChanged, save } from '../actions';
import { Button, Input } from './';

class ProductCreate extends Component {
    onNameChanged(text) {
        this.props.nameChanged(text);
    }
    
    onDescriptionChanged(text) {
        this.props.descriptionChanged(text);
    }

    onLinkChanged(text) {
        this.props.linkChanged(text);
    }

    onPriceChanged(text) {
        this.props.priceChanged(text);
    }

    onPressCreate() {
        const { name, description, linkImage, price } = this.props;

        this.props.save({ name, description, linkImage, price });
    }

    render() {
        return (
            <View>
                <Input placeholder="Nome" onChangeText={this.onNameChanged.bind(this)} errorMessage={this.props.validation.name} />
                <Input placeholder="Descrição" multiline numberOfLines={5} onChangeText={this.onDescriptionChanged.bind(this)} errorMessage={this.props.validation.description} />
                <Input placeholder="Link imagem" onChangeText={this.onLinkChanged.bind(this)} errorMessage={this.props.validation.linkImage} />
                <Input placeholder="Valor" onChangeText={this.onPriceChanged.bind(this)} errorMessage={this.props.validation.price} />
                <Input placeholder="Tipo" />
                <Button onPress={this.onPressCreate.bind(this)}>
                    Salvar
                </Button>
            </View>
        );
    }
}

const mapStateToProps = ({ productReducer }) => {
    const { name, description, linkImage, price, validation } = productReducer;

    return { name, description, linkImage, price, validation };
};

export default connect(mapStateToProps, {
    nameChanged,
    descriptionChanged,
    linkChanged,
    priceChanged,
    save
})(ProductCreate);
