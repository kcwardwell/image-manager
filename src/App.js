import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import MainMenu from './components/navigation/mainMenu';
import Routes from './components/navigation/routes';
function App() {
  return (
    <div className="container">
      <AmplifyAuthenticator >
        <Router>
          <MainMenu />
          <Routes />
        </Router>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
