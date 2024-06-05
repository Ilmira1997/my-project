import { useLocation } from 'react-router-dom';
import AppHeader from '../components/AppHeader/AppHeader';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  const { userName } = location.state || {};

  return (
    <div className="welcome-container">
      <AppHeader title="Welcome Page" />
      <p>Welcome, {userName || 'Гость'}!</p>
    </div>
  );
};

export default WelcomePage;
