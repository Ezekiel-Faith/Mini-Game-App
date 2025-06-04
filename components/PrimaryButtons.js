import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButtons({ children }) {
  function pressHandle() {
    console.log('Pressed!');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandle}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButtons;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  // ripple design for ios
  pressed: {
    opacity: 0.75,
  },
});
