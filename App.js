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


// import React, { Component } from 'react';
// import { AppRegistry, Text, Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     // let pic = {
//     //   uri: "https://sillysnap.s3.amazonaws.com/uploads/gallery/picture/111/thumb_gsgdyafdsf.gif"
//     // };
//     // return (
//     //   <Image source={pic} style={{width: 193, height: 110}}/>
//     // );

//     let pic2 = {
//       uri: "https://sillysnap.s3.amazonaws.com/uploads/gallery/picture/113/thumb_coke_dog.gif"
    
//     };
//     return (
//       <Image source={pic2} style={{width: 193, height: 110}}/>
      
//     );
//   }
// }

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);



// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);

// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={{flex: 2, backgroundColor: 'darkblue'}} />
//         <View style={{flex: 3, backgroundColor: 'lightgray'}} />
//         <View style={{flex: 1, backgroundColor: 'darkblue'}} />
//         <View style={{flex: 3, backgroundColor: 'lightgray'}} />
//         <View style={{flex: 1, backgroundColor: 'darkblue'}} />
//         <View style={{flex: 3, backgroundColor: 'lightgray'}} />
//         <View style={{flex: 1, backgroundColor: 'darkblue'}} />
//         <View style={{flex: 3, backgroundColor: 'lightgray'}} />
//         <View style={{flex: 1, backgroundColor: 'darkblue'}} />

//    </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);


// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{
//         flex: 1, 
//         flexDirection: 'column',
//         justifyContent: "center",
//         alignItems: 'center',
//         }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);


import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 40}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
