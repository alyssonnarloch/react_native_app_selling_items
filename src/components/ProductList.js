import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { productListByUser } from '../actions';
import ListItem from './ListItem';

class ProductList extends Component {
    componentWillMount() {
        this.props.productListByUser();

        this.createDataSource(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ products }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(products);        
    }

    renderRow(product) {
        return <ListItem product={product} />;
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
    const products = _.map(state.products, (val, uid) => {
        return { ...val, uid };
    });
    
    return { products };
};

export default connect(mapStateToProps, { productListByUser })(ProductList);
