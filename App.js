import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
const App = () => {
  const post1 = feed[0];
  const post2 = feed[1];

  return (
    <SafeAreaView>
      {/*<HomeScreen />*/}
      {/*   <Post post={post1} /> */}
      <SearchResultsScreen />
    </SafeAreaView>
  );
};
export default App;
