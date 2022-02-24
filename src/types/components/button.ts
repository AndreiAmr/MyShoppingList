export type ButtonColorProps = 'purple' | 'blue' | 'green';

export interface ButtonProps {
  color: ButtonColorProps;
  onPress: () => void;
  label: string;
}
