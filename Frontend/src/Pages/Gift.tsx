import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/Gift.css";

type CardId = "Him" | "Her" | "Toddler" | "Baby ";

interface GiftProps {
  children?: React.ReactNode;
}

const Gift: React.FC<GiftProps> = ({ children }) => {
  const { cardName } = useParams<{ cardName?: CardId }>();
  console.log("Card Name:", cardName);

  // array of titles objects:
  const titleMapping: Record<CardId, string> = {
    Him: "For Him",
    Her: "For Her",
    Toddler: "For Toddler",
    Baby: "For Baby",
  };

  // Get the title based on the cardName
  const title = cardName
    ? titleMapping[cardName] || "Unknown Title"
    : "Unknown Title";

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Gift;
