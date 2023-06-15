import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";

import store from "./redux/store";
import App from "./App";
import { AboutPage } from "./pages/About";
import { PostsPage } from "./pages/Posts";
import { UserPage } from "./pages/User";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Routes>
          <Route path="/" element={<PostsPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="user/:userId" element={<UserPage />}></Route>
        </Routes>
      </App>
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
