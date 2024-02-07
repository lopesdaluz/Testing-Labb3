import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Gift.css";

type CardId = "Men" | "Women" | "Children" | "Baby";

// interface GiftProps {
//   children?: React.ReactNode;
// }

const Gift = () => {
  const cardName = useParams<{ id: CardId }>();
  console.log("Card Name:", cardName);
  const [productlist, setproductlist] = useState([]);

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
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      // setproductlist(data);

      //göra  en filtrering här med variabel 'SortedProducts'

      const filteredProducts = await data.filter(
        (product: product) => product.category === cardName.id
      );
      setproductlist(filteredProducts);
      console.log("The product list", productlist);
      console.log("The card names:", cardName);
      // console.log("The filtered Products:", sortedProducts);

      console.log(data);
      return { data };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <div>
      <h1>For {cardName.id}</h1>
      <div className="product-list">
        {productlist.map((product: product) => (
          <div key={product.id} className="product-item">
            <img src={product.img_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
