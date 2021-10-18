import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import {Card} from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import YouTube from 'react-native-youtube';
 const VideoContent = () => {
  return (
    <View  style={{flex:1}}>
      <YouTube
        apiKey="6BSlwKkgCYU"
        videoId="6BSlwKkgCYU"
        videoIds={['QQqcax11nQw', 'P2zUSf6Anhc']}
      
        play={true}
        fullscreen={false}
        loop={false}
        controls={1}
        resumePlayAndroid={true}
        style={{marginTop: 120, alignSelf: 'stretch', height: 400}}></YouTube>
    </View>
  );
};
export default VideoContent;