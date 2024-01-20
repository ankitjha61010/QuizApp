// import {View, Text, Button, FlatList} from 'react-native';
// import React, {useState} from 'react';
// import Video from 'react-native-video';

// const VideoMusic = () => {
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   const [isMuted, setIsMuted] = React.useState(false);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);
//   const videoPlayer = React.useRef();

//   const togglePlaying = () => {};

//   const data = [
//     {
//       name: 'abhi',
//       url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//     },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },{
//         name: 'abhi',
//         url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//       },
//   ];

//   const goFullScreen = () => {
//     if (videoPlayer.current) {
//       videoPlayer.current.presentFullscreenPlayer();
//     }
//   };

//   const onSeek = seek => {
//     //Handler for change in seekbar
//     videoPlayer.current.seek(seek);
//   };

//   const onLoad = data => {
//     setIsLoading(false);
//   };

//   const onLoadStart = data => setIsLoading(true);

//   const exitFullScreen = () => {
//     alert('Exit full screen');
//   };

//   const enterFullScreen = () => {};

//   const onFullScreen = () => {
//     setIsFullScreen(isFullScreen);
//     if (screenType == 'content') setScreenType('cover');
//     else setScreenType('content');
//   };

//   const renderToolbar = () => (
//     <View>
//       <Text style={styles.toolbar}> toolbar </Text>
//     </View>
//   );

//   const onSeeking = currentTime => setCurrentTime(currentTime);

//   return (
//     <View style={{}}>
        
//       <FlatList
//         removeClippedSubviews={true}
//         maxToRenderPerBatch={25}
//         initialNumToRender={10}
//         onEndReachedThreshold={0.1}
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//         style={{
//           backgroundColor: 'white',
//         }}
//         data={data}
//         // keyExtractor={item => item?.id}
//         renderItem={({item, index}) => {
//           return (
//             <View style={{backgroundColor:'red'}}>
//                 <Text>{item.name}</Text>
//             <Video 
//             source={{uri:item.url}}
//             style={{height:'50%',width:'50%'}}
//             />
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default VideoMusic;


import React, {useEffect, useState} from 'react';
  import {PermissionsAndroid, View,FlatList, Text} from 'react-native';
  import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import Video from 'react-native-video';
  
const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
const DATA=[
    {
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },{
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },{
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
    ,{
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
]
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const openVideos = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    CameraRoll.getPhotos({
      assetType: 'Videos',
      first: 10,
    }).then(res => {
      setVideos(res.edges);
    //   console.log('videos', videos);
      console.log('videos', res);
    });
  };

    useEffect(() => {
    openVideos();
  }, []);

  return (
    <View style={{width:"100%",height:"100%"}}>
        {/* <FlatList 
        data={DATA}
        keyExtractor={item => item?.timestamp}
            renderItem={({item, index}) => {
              return (
                <View>
<Text>Name</Text>
                </View>
              )
            }}
        /> */}
      <Video
            ref={ref => (player = ref)}
             source={{
            //    uri: videos[0]?.node?.image?.uri,
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
             }}
            style={{width:"100%",height:"100%"}}
            resizeMode="cover"
            repeat={false}
            paused={false}
            controls={true}
          />
    </View>
  );
};

export default VideoComponent