export const ImageLibraryOptions = {
  mediaType: MediaType,
  maxWidth?: number,
  maxHeight?: number,
  quality?: PhotoQuality,
  videoQuality?: AndroidVideoOptions | iOSVideoOptions,
  includeBase64?: boolean,
}

export const CameraOptions = {
  ...ImageLibraryOptions ,
  durationLimit?: number,
  saveToPhotos?: boolean,
}

export const ImagePickerResponse = {
  didCancel: boolean,
  errorCode?: ErrorCode,
  errorMessage?: string,
  base64?: string,
  uri?: string,
  width?: number,
  height?: number,
  fileSize?: number,
  type?: string, 
  fileName?: string,
}

export const PhotoQuality = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export const MediaType = 'photo' | 'video';
export const AndroidVideoOptions = 'low' | 'high';
export const iOSVideoOptions = 'low' | 'medium' | 'high';
export const ErrorCode = 'camera_unavailable' | 'permission' | 'other';