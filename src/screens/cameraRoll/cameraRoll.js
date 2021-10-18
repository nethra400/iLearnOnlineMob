import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
 const CameraRollImage = () => {
  const [photo, setPhoto] = useState(null);
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          height: 50,
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 40,
          backgroundColor: '#EC5252',
          justifyContent: 'center',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 1.5,
        }}
        onPress={async () => {
          await launchCamera(
            {
              mediaType: 'photo',
              quality: 1,
              includeBase64: false,
              saveToPhotos: true,
              maxHeight: 600,
              maxWidth: 1000,
            },
            res => {
              setPhoto(res.uri);
              console.log('res', res);
            },
          );
        }}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
          Click picture
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          height: 50,
          padding: 10,
        
          borderRadius: 40,
          backgroundColor: '#EC5252',
          justifyContent: 'center',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 1.5,
        }}
        onPress={async () => {
          await launchCamera(
            {
              mediaType: 'video',
              videoQuality: 'high',
             // durationLimit: 20,
              saveToPhotos: true,
            },
            res => {
              console.log('res', res);
            },
          );
        }}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>
          Take Video
        </Text>
      </TouchableOpacity>
      {photo && (
        <View style={{flex: 1, backgroundColor: 'crimson'}}>
          <Image
            source={{uri: photo}}
            style={{width: 480, height: 480}}></Image>
        </View>
      )}
    </View>
  );
};
export default CameraRollImage;