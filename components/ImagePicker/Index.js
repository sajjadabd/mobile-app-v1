import {NativeModules} from 'react-native';

import {CameraOptions, ImageLibraryOptions, Callback} from './Types';

export * from './Types';

const DEFAULT_OPTIONS = {
  mediaType: 'photo',
  videoQuality: 'high',
  quality: 1,
  maxWidth: 0,
  maxHeight: 0,
  includeBase64: false,
  saveToPhotos: false,
  durationLimit: 0
};

export function launchCamera(options, callback) {
  NativeModules.ImagePickerManager.launchCamera(
    {...DEFAULT_OPTIONS, ...options},
    callback,
  );
}

export function launchImageLibrary(
  options,
  callback,
) {
  NativeModules.ImagePickerManager.launchImageLibrary(
    {...DEFAULT_OPTIONS, ...options},
    callback,
  );
}