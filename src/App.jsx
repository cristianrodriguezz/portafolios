import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import FormPerson from "./components/FormPerson";

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/register" exact element={<FormPerson />}/>
      </Routes>

    </Layout>
  );
}

export default App;
