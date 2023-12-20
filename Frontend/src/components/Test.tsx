import { useNavigate } from "react-router-dom";
import "../Styles/Test.css";
import logo from "../assets/gift-solid.svg";

const Test = () => {
  const navigate = useNavigate();

  function handleMenu(e: React.MouseEvent) {
    console.log(e);
    let div = e.target as HTMLDivElement;
    const cardId = div.id;
    console.log(div.id);
    navigate(`/gift/${cardId}`);
  }

  return (
    <>
      <div id="main-menu">
        <p>Få dem att le med en unik överraskning</p>
        <div className="card" id="card1" onClick={handleMenu}>
          <div>
            <h4 className="Title">För Honom</h4>
            <h6 className="Subtitle">
              Överraska honom med en personlig present
            </h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="card2" onClick={handleMenu}>
          <div>
            <h4 className="Title">För Henne</h4>
            <h6 className="Subtitle">Populära presenter till henne</h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="card3" onClick={handleMenu}>
          <div>
            <h4 className="Title">För Barn</h4>
            <h6 className="Subtitle">Vi har listat de bästa presenterna</h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="card4" onClick={handleMenu}>
          <div>
            <h4 className="Title">För Baby</h4>
            <h6 className="Subtitle">
              Från söta babykläder till praktiska babytillbehör
            </h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;
