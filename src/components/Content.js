import React from 'react';
import { View } from 'react-native';

const Content = (props) => {
    return (
        <View>
            {props.children}
        </View>
    );
};

export { Content };
