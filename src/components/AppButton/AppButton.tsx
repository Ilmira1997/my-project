import { Button } from './AppButton.style';

interface AppButtonProps {
  type: "button" | "submit" | "reset";
  buttonText: React.ReactNode;
}

const AppButton = ({ type, buttonText }: AppButtonProps) => {
  return (
    <Button type={type}>
      {buttonText}
    </Button>
  );
};

export default AppButton;
