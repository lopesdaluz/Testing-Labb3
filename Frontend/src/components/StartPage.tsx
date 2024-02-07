import { useNavigate } from "react-router-dom";
import "../Styles/StartPage.css";
import logo from "../assets/gift-solid.svg";

const StartPage = () => {
  const navigate = useNavigate();

  function handleMenu(id: string) {
    // let div = e.target as HTMLDivElement;
    // const cardId = div.id;
    console.log("Navigating to:", `/gift/${id}`);
    navigate(`/gift/${id}`);
  }
  return (
    <>
      <div id="main-menu">
        <p>Make them smile with a unique gift</p>
        <div className="card" id="Men" onClick={() => handleMenu("Men")}>
          <div>
            <h4 className="Title">For Men</h4>
            <h6 className="Subtitle">
              Överraska honom med en personlig present
            </h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="Women" onClick={() => handleMenu("Women")}>
          <div>
            <h4 className="Title">For Women</h4>
            <h6 className="Subtitle">Populära presenter till henne</h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div
          className="card"
          id="Children"
          onClick={() => handleMenu("Children")}
        >
          <div>
            <h4 className="Title">For Children</h4>
            <h6 className="Subtitle">Vi har listat de bästa presenterna</h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="Baby" onClick={() => handleMenu("Baby")}>
          <div>
            <h4 className="Title">For Baby</h4>
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
export default StartPage;
