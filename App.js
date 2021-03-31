import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AccountManager from 'react-native-account-manager';

function App() {

  const [textUsername, setTextUsername] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const createAccountInDevice = () => {
    console.log('submit');
    AccountManager.addAccountExplicitly('com.accountmanager', textUsername, textPassword)
    .then((account) => {
      console.log('account successfully added', account);
      alert(`account successfully added ${account}`);
    }).catch((e) => {
      console.log('fail to add account', e);
    });
  }
  return (
    <SafeAreaView>
      <View style={{padding: 50}}>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Username:</Text>
          <TextInput 
            onChangeText={setTextUsername}
            style={styles.textInput}
          />
        </View>
        <View style={styles.blockInput}>
          <Text style={styles.label}>Password:</Text>
          <TextInput 
            onChangeText={setTextPassword}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.blockButton}
          onPress={createAccountInDevice}>
          <Text style={styles.buttonSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    // color
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 30,

    // padding
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonSubmit: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    // color
    backgroundColor: '#0099FF',
    color: 'white',

    // border
    borderRadius: 30,
  },
  blockInput: {
    marginBottom: 10,
  },
  blockButton: {
    alignItems: 'center',
    marginTop: 10,
  }
})

export default App;
