import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/aboutUser/Admin';
import HomePage from './components/aboutManga/HomePage';
import AddManga from './components/aboutManga/AddManga';
import LoginModal from './components/aboutUser/LoginModal';
import MangaInfo from './components/aboutManga/MangaInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginModal />} />
      <Route path='/add' element={<AddManga />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/mangainfo' element={<MangaInfo/>} />
    </Routes>
  );
}

export default App;
