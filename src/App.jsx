import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import FormRepositorie from "./views/FormRepositorie";
import FormRegister from "./views/FormRegister";
import FormLogin from "./views/FormLogin";

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/create" exact element={<FormRepositorie />}/>
        <Route path="/signup" exact element={<FormRegister />}/>
        <Route path="/signin" exact element={<FormLogin />}/>
      </Routes>

    </Layout>
  );
}

export default App;
