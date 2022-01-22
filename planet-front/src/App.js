import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import Statistics from './pages/Statistics/Statistics';
import Diary from './pages/Diary/Diary';
import News from './pages/News/News';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
        <Route path="/statistics" element={<Statistics/>}></Route>
        <Route path="/diary" element={<Diary/>}></Route>
        <Route path="/news" element={<News/>}></Route>
    </Routes>
  );
}

export default App;
