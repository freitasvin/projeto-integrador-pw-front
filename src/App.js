import Home from './pages/Home';
import SingUp from './pages/Sing-up';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sing-up' element={<SingUp />} />
          <Route path='/*' element={<h1>Error 404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
