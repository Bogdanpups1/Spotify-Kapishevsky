import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Error from "./src/components/pages/error404/error";
import Login from "./src/components/pages/Login/login.jsx";
import ForgotPass from "./src/components/pages/ForgotPass/ForgotPass.jsx";
import Register from "./src/components/pages/Register/Register.jsx";
import Step1 from "./src/components/pages/Register/step1.jsx";
import Step2 from "./src/components/pages/Register/step2.jsx";
import NewPass from "./src/components/pages/ForgotPass/NewPass.jsx";
import Setting from "./src/components/settings/seting.jsx";
import Lending from "./src/components/lending/lending"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/new-passord" element={<NewPass />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
