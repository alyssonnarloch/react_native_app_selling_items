import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { productFieldChanged, save } from '../actions';
import { Button, Input } from './';

class ProductCreate extends Component {
    onPressCreate() {
        const { name, description, linkImage, price, type } = this.props;

        this.props.save({ name, description, linkImage, price, type });
    }

    render() {
        return (
            <View>
                <Input placeholder="Nome" onChangeText={value => this.props.productFieldChanged({ prop: 'name', value })} value={this.props.name} errorMessage={this.props.validation.name} />
                <Input placeholder="Descrição" multiline numberOfLines={5} onChangeText={value => this.props.productFieldChanged({ prop: 'description', value })} errorMessage={this.props.validation.description} />
                <Input placeholder="Link imagem" onChangeText={value => this.props.productFieldChanged({ prop: 'linkImage', value })} errorMessage={this.props.validation.linkImage} />
                <Input placeholder="Valor" onChangeText={value => this.props.productFieldChanged({ prop: 'price', value })} errorMessage={this.props.validation.price} />
                <Picker 
                    selectedValue={this.props.type} 
                    style={styles.picker}   
                    onValueChange={value => this.props.productFieldChanged({ prop: 'type', value })}                
                >
                    <Picker.Item label="Selecione" value="0" />
                    <Picker.Item label="Automóvel" value="1" />
                    <Picker.Item label="Vídeo Game" value="2" />
                    <Picker.Item label="Smartphone" value="3" />
                </Picker>
                <Button onPress={this.onPressCreate.bind(this)}>
                    Salvar
                </Button>
            </View>
        );
    }
}

const styles = {
    picker: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8
    }
};

const mapStateToProps = ({ productReducer }) => {
    const { name, description, linkImage, price, type, validation } = productReducer;

    return { name, description, linkImage, price, type, validation };
};

export default connect(mapStateToProps, {
    productFieldChanged,
    save
})(ProductCreate);
