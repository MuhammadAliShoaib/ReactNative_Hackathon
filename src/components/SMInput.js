import {StyleSheet, Text, TextInput, View} from 'react-native';

function SMInput(props) {
  return (
    <>
    {props.label? <Text style={{...props.TextStyle, ...style.labels}}>{props.label}</Text> : null}
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
  labels: {
    color: '#C0C0C0',
    fontSize: 15,
    marginBottom: 10,
  },
});

export default SMInput;
