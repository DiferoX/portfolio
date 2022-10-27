import logo from '../logo.svg';
import '../styles/Header.css';
import InfoBar from './InfoBar';
import MenuBar from './MenuBar';

function Header() {
  return (
    <header className="App-header">
      <MenuBar />
      <InfoBar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </header>
  );
}

export default Header;
