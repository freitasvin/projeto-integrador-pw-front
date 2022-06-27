import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SingUp } from './pages/Sing-up';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import { Toast } from './components/Toast';

function App() {
  return (

    <div className="App">
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<h1>Error 404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
