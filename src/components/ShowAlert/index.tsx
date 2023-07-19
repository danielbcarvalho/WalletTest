import { Alert } from 'react-native';

interface AlertProps {
  title: string;
  message: string;
  onPress?: () => void;
}

export function ShowAlert({ title, message, onPress }: AlertProps) {
  Alert.alert(title, message, [{ text: 'OK', onPress }]);
}
