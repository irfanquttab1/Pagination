import {StyleSheet} from 'react-native';
import Theme from '../Utils/Theme';
export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  image: {
    width: Theme.wp('90%'),
    height: Theme.hp('30%'),
    borderRadius: 10,
  },
  loaderContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
