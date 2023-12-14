import "../Styles/Test.css"
const Test = () => {


  
  function handleMenu(e: React.MouseEvent) {
    console.log(e)
    let div = e.target as HTMLDivElement
    console.log(div.id)
  }


  return (
    <>
      <div id="menu">
        <div id="kortHonom" onClick={handleMenu}>
          <h4 className="Title">För Honom</h4>
          <h6 className="Subtitle">Överraska henne med  en personlig present</h6>
        </div>
        <div id="kortHenne" onClick={handleMenu}>
          <h4 className="Title">För Henne</h4>
        </div>
        <div id="kortBarn" onClick={handleMenu}>
          <h4 className="Title">För Barn</h4>
        </div>
        <div id="kortBaby" onClick={handleMenu}>
          <h4 className="Title">För Baby</h4>
        </div>
      </div>
    </>
  );
};
export default Test;

