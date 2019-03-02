import { Image } from 'react-native';
import { Asset, Font } from 'expo';

export const cacheImages = images => images.map((image) => {
  if (typeof image === 'string') {
    return Image.prefetch(image);
  }
  return Asset.fromModule(image).downloadAsync();
});

export const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));
