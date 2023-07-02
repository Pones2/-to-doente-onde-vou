import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import Header from "./components/header/Header";
import Router from "./router/Router";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<BrowserRouter>
					<Header />

					<main>
						<Router />
					</main>

					<Footer />
				</BrowserRouter>
			</ContextProvider>
		</div>
	);
}

export default App;
