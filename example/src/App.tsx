import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

import { isValidWord } from 'react-native-turbo-spellcheck-module';

function App(): React.JSX.Element {
  const [value, setValue] = React.useState<string | null>(null);

  const [isValid, setIsValid] = React.useState<
    boolean
  >(false);


  function checkSpell() {
    const res = isValidWord(value ?? '');
    setIsValid(res)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>
        Is Valid: {isValid ? 'Yes' : 'No'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setValue}
      />
      
      <Button title="Check" onPress={checkSpell} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default App;