import "../Styles/Test.css";

const Test = () => {
  // function handleMenu(e: React.MouseEvent) {
  //   console.log(e);
  //   let div = e.target as HTMLDivElement;
  //   console.log(div.id);
  // }

  return (
    <>
      <div id="menu">
        <div className="card" id="card1">
          <div>
            <h4 className="Title">För Honom</h4>
            <h6 className="Subtitle">
              Överraska honom med en personlig present
            </h6>
          </div>
          <div className="imageCard" id="card2"></div>
        </div>
        <div className="card">
          <div>
            <h4 className="Title">För Henne</h4>
            <h6 className="Subtitle">Populära presenter till henne</h6>
          </div>
          <div className="imageCard"></div>
        </div>
        <div className="card" id="card3">
          <div>
            <h4 className="Title">För Barn</h4>
            <h6 className="Subtitle">Vi har listat de bästa presenterna</h6>
          </div>
          <div className="imageCard"></div>
        </div>
        <div className="card" id="card4">
          <div>
            <h4 className="Title">För Baby</h4>
            <h6 className="Subtitle">
              Från söta babykläder till praktiska babytillbehör
            </h6>
          </div>
          <div className="imageCard"></div>
        </div>
      </div>
    </>
  );
};
export default Test;
