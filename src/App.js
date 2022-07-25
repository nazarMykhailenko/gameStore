import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Header } from "./components/header";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
