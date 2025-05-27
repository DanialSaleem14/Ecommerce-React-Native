import React from 'react';
import { View, Text } from 'react-native';

const ProductItem = ({ product, onPress }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
    </View>
  );
};

export default ProductItem;
