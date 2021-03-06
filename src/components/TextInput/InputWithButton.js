import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const containerStyles = [styles.container];
  const underlayColor =
    color(styles.$buttonBackGroundColorBase)
      .darken(styles.$buttonBackGroundColorModifier);

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyle = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyle.push({ color: props.textColor })
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props}/>
    </View>
  );
};

export default InputWithButton;
