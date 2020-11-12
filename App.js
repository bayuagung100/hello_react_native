/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// function bawaan
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// style bawaan
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });




// class component
//basic
// class App extends Component<props>{
//   render(){
//     return(
//       // <View> Seperti <div>
//       <View>
//         {/* <StatusBar> status bar nya handphone */}
//         <StatusBar backgroundColor='blue'/>
//         {/* panggil class lain */}
//         <Header/>
//         {/* end panggil class lain */}
//         <Text>Hello React Native</Text>

//         <Footer/>
//       </View>
//     )
//   }
// }
// atau
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
    }
  }

  handleTambah = () => {
    // Alert.alert('ini adalah alert dari tambah button');
    this.setState({
      jumlah: this.state.jumlah + 1,
    })
  }
  render() {
    return (
      // <View> Seperti <div>
      <View>

        {/* <StatusBar> status bar nya handphone */}
        <StatusBar backgroundColor='blue' />

        {/* panggil class lain */}
        {/* person itu props */}
        {/* <Header person='person props dari App'/> */}
        {/* component bisa dipakein props lebih dari 1 */}
        <Header usia='22' />
        {/* end panggil class lain */}

        {/* style dari const styles*/}
        <Text style={styles.header}>Hello React Native</Text>
        {/* end style dari const styles*/}

        {/* tahun itu props */}
        <Footer tahun='2020' />

        <Button title='tambah buton' onPress={this.handleTambah} />

        {/* inline style */}
        {/* <Text style={{color:'blue', marginTop: 20}} >Jumlah : {this.state.jumlah}</Text> */}
        {/* end inline style */}

        <Text style={styles.jumlah} >Jumlah : {this.state.jumlah}</Text>

      </View>
    )
  }
}
// end class component

//style
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  jumlah: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
  }
})
//end style

// component (dalam 1 file)
// class Header extends Component{
//   render(){
//     return(
//       <Text>Ini Header</Text>
//     )
//   }
// }
// end component (dalam 1 file)


// function component (dalam 1 file)
// const Footer = () => {
//   return(
//     <View>
//       <Text>
//         Ini footer
//       </Text>
//     </View>
//   )
// }
// atau
// function Footer(){
//   return (
//     <View>
//       <Text>
//         Ini footer
//       </Text>
//     </View>
//   );
// };
// atau
// Footer = () => {
//   var copyright = "@bayu";
//   return(
//     <View>
//       <Text>
//         Ini footer
//       </Text>
//       <Text>{copyright}</Text>
//     </View>
//   )
// }
// end function component (dalam 1 file)

export default App;
