import Test from "../components/Test";
import "../Styles/Home.css";
import { Hamburger } from "../components/Hamburger";

const Home = () => {
  return (
    <div className="container">
      <Hamburger />
      <Test />
    </div>
  );
};
export default Home;
