import { Header } from './AppHeader.style';

interface AppHeaderProps {
  title: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <Header>
      {title}
    </Header>
  );
};

export default AppHeader;
