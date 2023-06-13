import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import FormRepositorie from "./views/FormRepositorie";
import FormLogin from "./views/FormLogin";
import Register from "./views/Register";
import Terminos from "./views/Terminos";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create" exact element={<FormRepositorie />} />
        <Route path="/signup" exact element={<Register />} />
        <Route path="/signin" exact element={<FormLogin />} />
        <Route path="/terminos" exact element={<Terminos/>} />
      </Routes>
    </Layout>
  );
}

export default App;
