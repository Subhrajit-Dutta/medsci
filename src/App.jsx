import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import UserAuthentication from "./components/routes/user-routes/authentication/user.authentication.component.jsx";
import Dashboard from "./components/dashboard/dashboard.component";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<UserAuthentication />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
