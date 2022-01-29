import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/Calendar/CalendarPage";
import Statistics from "./pages/Statistics/Statistics";
import Diary from "./pages/Diary/Diary";
import News from "./pages/News/News";
import FloatingPage from "./pages/Floating/FloatingPage";
import FloatingExpensePage from "./pages/Floating/FloatingExpensePage";
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
      <Route path="/floatingpage" element={<FloatingPage />}></Route>
      <Route path="/floatingExpensePage" element={<FloatingExpensePage />}></Route>
      <Route path="/floatingDate" element={<FloatingDate />}></Route>
      <Route path="/floatingPrice" element={<FloatingPrice />}></Route>
    </Routes>
  );
}

export default App;
