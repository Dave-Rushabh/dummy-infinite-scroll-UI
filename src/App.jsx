import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchJob from "./pages/searchJob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchJob />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
