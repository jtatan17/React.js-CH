import React, { useState, useEffect } from "react";
import FlexWrapper from "../Flexwrapper";
import Item from "../Item";
import { getSingleItem } from "../../Data/products";
import { useParams } from "react-router";


function ItemDetailContainer() {
  const [product, setProdutcs] = useState([]);
  let {itemid} = useParams();
  console.log(itemid);
  useEffect(() => {
    getSingleItem(itemid).then((resolve) => {
      console.log(resolve);
      setProdutcs(resolve);
    });
  }, []);
  return (
    <>
      <div className="itemConatiner">
        <FlexWrapper>
          <div className="card">
            <h1>Detalle</h1>
            <h5>{product.title}</h5>
            <img src={product.imgurl}></img>
            <p>{product.detail}</p>
          </div>
          {/* <Item 
          imgurl="https://http2.mlstatic.com/D_NQ_NP_924043-MCO31047123874_062019-W.jpg" title="Camisa" price={200} detail="La mejor camisa" 
          /> */}
        </FlexWrapper>
      </div>
    </>
  );
}

export default ItemDetailContainer;
