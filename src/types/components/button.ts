export type ButtonColorProps = 'purple' | 'blue' | 'green' | 'orange';

export interface ButtonProps {
  color: ButtonColorProps;
  onPress: () => void;
  label: string;
}
