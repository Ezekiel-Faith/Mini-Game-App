import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButtons from '../components/PrimaryButtons';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <PrimaryButtons>Reset</PrimaryButtons>
      <PrimaryButtons>Confirm</PrimaryButtons>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
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
});
