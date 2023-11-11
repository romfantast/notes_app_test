import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Greeting from "./pages/Greeting/Greeting";
import NotFound from "./pages/NotFound/NotFound";
import { lazy } from "react";

const Notes = lazy(() => import("./pages/Notes/Notes"));
const About = lazy(() => import("./pages/About/About"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Greeting />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
