import s from "./Global.module.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout/Layout";
import { Hello } from "./page/Hello/Hello";
import { About } from "./page/About/About";
import { Portfolio } from "./page/Portfolio";
import { Contact } from "./page/Contact/Contact";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <div className={s.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notFound" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
