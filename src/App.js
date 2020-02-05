import React from 'react';

import Header from './components/header';

import Routes from './routes';

import './styles.css';

// Criando Componente como função ('Stateless Component')
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
