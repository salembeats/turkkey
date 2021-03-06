import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactWebView from 'react-native-webview';
import AppBar from './WebViewAppBar.js';

const WebView = props => {
  const {navigation, route} = props;
  const {uri} = route.params;
  return (
    <View style={styles.webViewView}>
      <AppBar navigation={navigation} />
      <ReactWebView
        source={{uri}}
        onNavigationStateChange={state => {}}
        onError={() => console.warn('error')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webViewView: {
    flex: 1,
  },
});
export default WebView;
