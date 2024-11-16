import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DrugPage from './components/DrugPage';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/drugs/search' element={<SearchPage />}/>
        <Route path='/drugs/:rxcui' element={<DrugPage />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
