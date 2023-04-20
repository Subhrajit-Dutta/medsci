import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
