import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    {id: 1, name: 'Apple', symbol: 'AAPL'},
    {id: 2, name: 'Tesla', symbol: 'TSLA'},
    {id: 3, name: 'Microsoft', symbol: 'MSFT'},
    {id: 4, name: 'Amazon', symbol: 'AMZN'},
    {id: 5, name: 'Facebook', symbol: 'FB'},
  ]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={watchlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={{padding: 20}}>
            <Text>
              {item.name} ({item.symbol})
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Watchlist;
