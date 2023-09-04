import {StyleSheet, Text, TextInput, View} from 'react-native';

function SMInput(props) {
  return (
    <>
      <TextInput
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.values}
        placeholderTextColor="#C0C0C0"
        placeholder={props.placeholder}
        style={[style.inputs, props.style]}
      />
    </>
  );
}

const style = StyleSheet.create({
  inputs: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    color: 'black',
    padding:15
  },
});

export default SMInput;
