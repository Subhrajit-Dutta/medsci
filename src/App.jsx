import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Dashboard from "./components/dashboard/dashboard";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
