import "../Styles/Gift.css";
import { useParams } from "react-router-dom";

type CardId = "card1" | "card2" | "card3" | "card4";

const Gift = () => {
  const { cardId } = useParams<{ cardId?: CardId }>();

  //array of titles objects:
  const titleMapping: Record<CardId, string> = {
    card1: "För honom",
    card2: "För Henne",
    card3: "För Barn",
    card4: "För Baby",
  };

  // Get the title based on the cardId
  const title = cardId
    ? titleMapping[cardId] || "Unknown Title"
    : "Unknown Title";

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default Gift;
