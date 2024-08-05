import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
