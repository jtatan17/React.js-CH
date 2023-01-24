import React,{useState, useEffect} from "react";
import FlexWrapper from './Flexwrapper';
import Item from './Item';
import getItems from '../Data/products';

function ItemListContainer() {
  const [products, setProdutcs] = useState([]);
  
  getItems().then((resolve) => {
    setProdutcs(resolve)
  });
    return <>
    <div className='itemConatiner'>
        <FlexWrapper>
          {products.map((item)=>(
            <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imgurl={item.imgurl}
            detail={item.detail}
            />
          ))}
        {/* <Item 
        imgurl="https://http2.mlstatic.com/D_NQ_NP_924043-MCO31047123874_062019-W.jpg" title="Camisa" price={200} detail="La mejor camisa" 
        /> */}
        </FlexWrapper> 
      </div>
    </>
}

export default ItemListContainer