import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';
import { useState } from 'react';

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumb, setEnteredNumb] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumb(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumb('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumb);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number mus be between 1 and 99!!', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumb}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 0,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    paddingTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonContainer: {
    flex: 1,
  },
});
