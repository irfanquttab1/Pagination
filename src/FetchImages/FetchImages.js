import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View, Image, ActivityIndicator} from 'react-native';
import {styles} from './Style';
import {fetchImages} from '../Networking/Networking';

const FetchImages = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const currentPage = useRef(0);

  useEffect(() => {
    fetchImages(setLoading, currentPage, setImages, images);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.src?.medium}} style={styles.image} />
      </View>
    );
  };

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      onEndReached={() =>
        fetchImages(setLoading, currentPage, setImages, images)
      }
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
};

export default FetchImages;
