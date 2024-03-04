import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoute";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </Router>
    </>
  );
}

export default App;
