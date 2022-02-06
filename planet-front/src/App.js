import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/Calendar/CalendarPage";
import Statistics from "./pages/Statistics/Statistics";
import Diary from "./pages/Diary/Diary";
import News from "./pages/News/News";
import FloatingPage1 from "./pages/Floating/FloatingPage1";
import FloatingPage2 from "./pages/Floating/FloatingPage2";
import FloatingDate from "./pages/Floating/FloatingDate";
import FloatingPrice from "./pages/Floating/FloatingPrice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/calendar" element={<CalendarPage />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/floatingpage1" element={<FloatingPage1 />}></Route>
      <Route path="/floatingPage2" element={<FloatingPage2 />}></Route>
      <Route path="/floatingDate" element={<FloatingDate />}></Route>
      <Route path="/floatingPrice" element={<FloatingPrice />}></Route>
    </Routes>
  );
}

export default App;
