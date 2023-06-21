import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main>
          <Router />
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
