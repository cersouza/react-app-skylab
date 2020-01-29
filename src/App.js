import React from 'react';

import Header from './components/header';
import Main from './pages/main';

import './styles.css';

// Criando Componente como função ('Stateless Component')
const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
