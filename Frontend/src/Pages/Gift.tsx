import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Gift.css";

type CardId = "Him" | "Her" | "Toddler" | "Baby";

interface GiftProps {
  children?: React.ReactNode;
}

const Gift: React.FC<GiftProps> = ({ children }) => {
  const { cardName } = useParams<{ cardName: CardId }>();
  console.log("Card Name:", cardName);
  const [productlist, setproductlist] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, [cardName]);

  type product = {
    id: number;
    name: string;
    category: string;
    price: string;
    img_url: string;
  };

  type ProductResponse = {
    data: product[];
  };

  async function getProduct(): Promise<ProductResponse> {
    try {
      let response = await fetch("http://localhost:3000/products");
      let data = await response.json();
      setproductlist(data);

      //göra  en filtrering här med variabel 'SortedProducts'

      const filteredProducts = data.filter(
        (product) => product.category === cardName
      );
      setSortedProducts(filteredProducts);
      console.log("The product list", productlist);
      console.log("The card names:", cardName);
      console.log("The filtered Products:", sortedProducts);

      console.log(data);
      return { data };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

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
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.img_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Gift;
