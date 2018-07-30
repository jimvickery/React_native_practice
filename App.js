// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}>
//         <View style={{ height: 20, backgroundColor: 'white'}} />
//         <View style={{ height: 20, backgroundColor: '#000040'}} />
//         <View style={{ height: 120, backgroundColor: '#323299'}} />
//         <View style={{ height: 20, backgroundColor: '#000040'}} />
//         <View style={{ height: 120, backgroundColor: '#323299'}} />
//         <View style={{ height: 20, backgroundColor: '#000040'}} />
//         <View style={{ height: 120, backgroundColor: '#323299'}} />
//       </View>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello world!</Text>
//       </View>
//     );
//   }
// }


import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    // let pic = {
    //   uri: "https://sillysnap.s3.amazonaws.com/uploads/gallery/picture/111/thumb_gsgdyafdsf.gif"
    // };
    // return (
    //   <Image source={pic} style={{width: 193, height: 110}}/>
    // );

    let pic2 = {
      uri: "https://sillysnap.s3.amazonaws.com/uploads/gallery/picture/113/thumb_coke_dog.gif"
    
    };
    return (
      <Image source={pic2} style={{width: 193, height: 110}}/>
      
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
