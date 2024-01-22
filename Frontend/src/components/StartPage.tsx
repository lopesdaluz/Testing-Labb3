import { useNavigate } from "react-router-dom";
import "../Styles/Test.css";
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
        <div className="card" id="Him" onClick={() => handleMenu("Him")}>
          <div>
            <h4 className="Title">For Him</h4>
            <h6 className="Subtitle">
              Överraska honom med en personlig present
            </h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div className="card" id="Her" onClick={() => handleMenu("Her")}>
          <div>
            <h4 className="Title">For Her</h4>
            <h6 className="Subtitle">Populära presenter till henne</h6>
          </div>
          <div className="imageCard">
            <img src={logo} alt="Gift Icon" />
          </div>
        </div>
        <div
          className="card"
          id="Toddler"
          onClick={() => handleMenu("Toddler")}
        >
          <div>
            <h4 className="Title">For Toodler</h4>
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
