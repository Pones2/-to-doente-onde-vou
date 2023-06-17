import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="container">
          <Router />
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
