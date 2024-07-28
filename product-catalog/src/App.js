import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductCatalog from "./components/ProductCatalog";
import UploadPage from "./components/Upload";
import Header from "./components/Header";
import store from "./store";
import CartPage from "./components/Cart";
import { Provider } from "react-redux";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductCatalog />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
