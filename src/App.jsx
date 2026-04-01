import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import FooterBottom from "./components/FooterBottom";
import { Route, Routes } from "react-router";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/movies/details/:id" element={<Details />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </main>
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
