import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button as TButton } from 'tamagui';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  title?: string;
}

const Button: React.FC<ButtonProps> = () => {
  return <TButton>Meu Botão tamagui</TButton>;
};

export default Button;
