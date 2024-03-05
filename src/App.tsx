import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Teachers from "./pages/Teachers/Teachers";
import { useDispatch } from "react-redux";
import { getTeachersThunk } from "./redux/thunks";

const App: React.FC = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
