import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </>
  );
};

export default App;
