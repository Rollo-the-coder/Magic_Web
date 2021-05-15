// No need to import "react" just for JSX in React 17+
//import "../styles/index.scss";
import Example from "./example";
import Navbar from './Navbar/Navbar';
import Example2 from "./example2";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <Navbar />
          
        </section>
      </main>
    </>
  );
};

export default App;
