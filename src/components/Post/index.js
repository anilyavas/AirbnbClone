import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/*bed bedroom*/}
      <Text style={styles.bedrooms}>1 Bed 1 Bedroom</Text>
      {/*type description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire flat. Puerto de la cruz lrmLorem Ipsum is slimply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy
      </Text>
      {/* old price new price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>36$ </Text>
        <Text style={styles.newPrice}> 30$ </Text>/ night
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
