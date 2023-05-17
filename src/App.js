import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout/Layout";
import { Hello } from "./page/Hello/Hello";
import { About } from "./page/About/About";
import { Portfolio } from "./page/Portfolio";
import { Contact } from "./page/Contact";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" component={<Hello />} />
          <Route path="/about" component={<About />} />
          <Route path="/portfolio" component={<Portfolio />} />
          <Route path="/contact" component={<Contact />} />
          <Route path="/notFound" component={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
