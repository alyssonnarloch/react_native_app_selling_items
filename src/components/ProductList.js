import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { productListByUser } from '../actions';

class ProductList extends Component {
    componentWillMount() {
        this.props.productListByUser();

        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('Props', nextProps);
        this.createDataSource(nextProps);
    }

    createDataSource({ products }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(products);        
    }

    renderRow(product) {
        return <Text>{product.name}</Text>;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log('state.products', state.products);
    const products = _.map(state.products, (val, uid) => {
        return { ...val, uid };
    });
    
    return { products };
};

export default connect(mapStateToProps, { productListByUser })(ProductList);
