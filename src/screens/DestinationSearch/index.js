import React, {useState} from 'react';
import styles from './styles';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import searchResult from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = props => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destination*/}
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => {
              navigation.navigate('Guests');
            }}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
