import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SingUp } from './pages/Sing-up';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Registrations } from './pages/Registrations';
import { RegistrationRequests } from './pages/RegistrationRequests';
import { GlobalStyle } from './styles/GlobalStyle';
import { Toast } from './components/Toast';
import { Nursery } from './pages/Nursery';
import { Registrate } from './pages/Registrate';

function App() {
  const idLevel = localStorage.getItem('idLevel');

  return (
    <div className="App">
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registrations" element={idLevel === 3 ? <Registrations /> : <RegistrationRequests />} />
          <Route path="/nursery/:idNursery" element={<Nursery />} />
          <Route path="/nursery/:idNursery/registration/:idVacancy" element={<Registrate />} />
          <Route path="/*" element={<h1>Error 404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
