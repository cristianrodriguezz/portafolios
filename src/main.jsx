import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProvider } from "./context/filters.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserFavProvider } from "./context/userFav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserFavProvider>
    <FiltersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FiltersProvider>
  </UserFavProvider>
);
