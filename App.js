import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const sum = () => {
    const result = number1 + number2;
    setResult(result);
  };

  const subtract = () => {
    const result = number1 - number2;
    setResult(result);
  };

  const multiply = () => {
    const result = number1 * number2;
    setResult(result);
  };

  const divide = () => {
    if (number2 != 0) {
      const result = number1 / number2;
      setResult(result);
    } else {
      alert("Can't divide by zero");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculator</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={value => setNumber1(parseFloat(value))}
        placeholder="First Number"
        keyboardType="numberic"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setNumber2(parseFloat(value))}
        placeholder="Second Number"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button title="+" onPress={sum} />
          </View>

          <View style={styles.button}>
            <Button title="-" onPress={subtract} />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button title="*" onPress={multiply} />
          </View>

          <View style={styles.button}>
            <Button title="/" onPress={divide} />
          </View>
        </View>
      </View>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue',
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifycontent: 'center',
  },
  button: {
    flex: 1,
    margin: 2,
    color: 'purple',
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
