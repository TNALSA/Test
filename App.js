import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, WebView } from 'react-native';

const myHTML = require('./pj.html');

function App() {
  return (
    <View>
      
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    fontSize:15
  },
  grid:{
    padding:10,
    margin:50,
    width:600,
    backgroundColor:'#fff'
  }
});
