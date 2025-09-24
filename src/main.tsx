import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store/store";
import { ProductProvider } from "./components/context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProductProvider>
            <App />
          </ProductProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.Fragment>
);
