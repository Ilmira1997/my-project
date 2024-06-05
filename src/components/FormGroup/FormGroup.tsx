import { Group, Label, Error } from './FormGroup.style';

interface FormGroupProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormGroup = ({ label, error, children }: FormGroupProps) => {
  return (
    <Group>
      <Label>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </Group>
  );
};

export default FormGroup;
