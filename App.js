import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import OrderSummary from './Screens/OrderSummary';

import CardPayment from './Components/cardPayment';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Checkout' />
      <View style={{flex:1}}>
        <CardPayment />
      </View>
      <Footer title='Confirm' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
