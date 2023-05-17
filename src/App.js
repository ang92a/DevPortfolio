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
        <Hello />
        <About />
        <Portfolio />
        <Contact />
        <NotFound />
      </Layout>
    </>
  );
}

export default App;
