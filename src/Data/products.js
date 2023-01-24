const products = [
  {
    id: 1,
    title: "Soup - Tomato Mush. Florentine",
    qunatitigr: 4.37,
    stock: 8,
    imgurl: "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
    price: 7,

    detail: "Lorem ipsum",
  },
  {
    id: 2,
    title: "Pear - Packum",
    qunatitigr: 1.46,
    stock: 9,
    imgurl: "http://dummyimage.com/213x100.png/ff4444/ffffff",
    price: 5,

    detail: "Lorem ipsum",
  },
  {
    id: 3,
    title: "Lotus Root",
    qunatitigr: 4.84,
    stock: 9,
    imgurl: "http://dummyimage.com/216x100.png/dddddd/000000",
    price: 9,

    detail: "Lorem ipsum",
  },
  {
    id: 4,
    title: "Lid - 0090 Clear",
    qunatitigr: 2.52,
    stock: 9,
    imgurl: "http://dummyimage.com/120x100.png/dddddd/000000",
    price: 19,
    detail: "Lorem ipsum",
  },
  {
    id: 5,
    title: "Steel Wool",
    qunatitigr: 2.94,
    stock: 2,
    imgurl: "http://dummyimage.com/190x100.png/dddddd/000000",
    price: 12,
    detail: "Lorem ipsum",
  },
  {
    id: 6,
    title: "Gin - Gilbeys London, Dry",
    qunatitigr: 1.99,
    stock: 2,
    imgurl: "http://dummyimage.com/100x100.png/dddddd/000000",
    price: 25,
    detail: "Lorem ipsum",
  },
  {
    id: 7,
    title: "Napkin White",
    qunatitigr: 1.34,
    stock: 9,
    imgurl: "http://dummyimage.com/115x100.png/dddddd/000000",
    price: 9,

    detail: "Lorem ipsum",
  },
  {
    id: 8,
    title: "Bulgar",
    qunatitigr: 2.65,
    stock: 6,
    imgurl: "http://dummyimage.com/157x100.png/ff4444/ffffff",
    price: 24,
    detail: "Lorem ipsum",
  },
  {
    id: 9,
    title: "Wine La Vielle Ferme Cote Du",
    qunatitigr: 1.31,
    stock: 4,
    imgurl: "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
    price: 8,

    detail: "Lorem ipsum",
  },
  {
    id: 10,
    title: "Lid - Translucent, 3.5 And 6 Oz",
    qunatitigr: 4.17,
    stock: 7,
    imgurl: "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
    price: 21,
    detail: "Lorem ipsum",
  },
  {
    id: 11,
    title: "Wine - Mas Chicet Rose, Vintage",
    qunatitigr: 1.06,
    stock: 9,
    imgurl: "http://dummyimage.com/180x100.png/cc0000/ffffff",
    price: 28,
    detail: "Lorem ipsum",
  },
  {
    id: 12,
    title: "Rolled Oats",
    qunatitigr: 1.53,
    stock: 1,
    imgurl: "http://dummyimage.com/115x100.png/cc0000/ffffff",
    price: 24,
    detail: "Lorem ipsum",
  },
  {
    id: 13,
    title: "Bar Energy Chocchip",
    qunatitigr: 2.66,
    stock: 7,
    imgurl: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
    price: 15,
    detail: "Lorem ipsum",
  },
  {
    id: 14,
    title: "The Pop Shoppe - Grape",
    qunatitigr: 2.17,
    stock: 2,
    imgurl: "http://dummyimage.com/165x100.png/cc0000/ffffff",
    price: 9,

    detail: "Lorem ipsum",
  },
  {
    id: 15,
    title: "Tomatoes - Grape",
    qunatitigr: 4.08,
    stock: 10,
    imgurl: "http://dummyimage.com/103x100.png/ff4444/ffffff",
    price: 6,

    detail: "Lorem ipsum",
  },
  {
    id: 16,
    title: "Danishes - Mini Cheese",
    qunatitigr: 2.08,
    stock: 7,
    imgurl: "http://dummyimage.com/137x100.png/cc0000/ffffff",
    price: 10,
    detail: "Lorem ipsum",
  },
  {
    id: 17,
    title: "Wine - Prosecco Valdobiaddene",
    qunatitigr: 2.94,
    stock: 9,
    imgurl: "http://dummyimage.com/143x100.png/dddddd/000000",
    price: 11,
    detail: "Lorem ipsum",
  },
  {
    id: 18,
    title: "Ham - Cooked",
    qunatitigr: 4.96,
    stock: 2,
    imgurl: "http://dummyimage.com/184x100.png/ff4444/ffffff",
    price: 21,
    detail: "Lorem ipsum",
  },
  {
    id: 19,
    title: "Lettuce - Treviso",
    qunatitigr: 2.61,
    stock: 5,
    imgurl: "http://dummyimage.com/194x100.png/ff4444/ffffff",
    price: 21,
    detail: "Lorem ipsum",
  },
  {
    id: 20,
    title: "Sour Puss Sour Apple",
    qunatitigr: 1.98,
    stock: 2,
    imgurl: "http://dummyimage.com/197x100.png/ff4444/ffffff",
    price: 26,
    detail: "Lorem ipsum",
  },
  {
    id: 21,
    title: "Turkey - Breast, Smoked",
    qunatitigr: 3.27,
    stock: 10,
    imgurl: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
    price: 12,
    detail: "Lorem ipsum",
  },
  {
    id: 22,
    title: "Oil - Canola",
    qunatitigr: 3.12,
    stock: 1,
    imgurl: "http://dummyimage.com/149x100.png/dddddd/000000",
    price: 24,
    detail: "Lorem ipsum",
  },
  {
    id: 23,
    title: "Turnip - Mini",
    qunatitigr: 1.02,
    stock: 10,
    imgurl: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    price: 13,
    detail: "Lorem ipsum",
  },
  {
    id: 24,
    title: "Soup - Campbells Beef Noodle",
    qunatitigr: 3.18,
    stock: 5,
    imgurl: "http://dummyimage.com/126x100.png/dddddd/000000",
    price: 30,
    detail: "Lorem ipsum",
  },
  {
    id: 25,
    title: "Creme De Menth - White",
    qunatitigr: 4.41,
    stock: 7,
    imgurl: "http://dummyimage.com/102x100.png/cc0000/ffffff",
    price: 5,

    detail: "Lorem ipsum",
  },
  {
    id: 26,
    title: "Beef - Striploin Aa",
    qunatitigr: 4.76,
    stock: 2,
    imgurl: "http://dummyimage.com/210x100.png/ff4444/ffffff",
    price: 13,
    detail: "Lorem ipsum",
  },
  {
    id: 27,
    title: "Longos - Greek Salad",
    qunatitigr: 4.41,
    stock: 1,
    imgurl: "http://dummyimage.com/217x100.png/cc0000/ffffff",
    price: 5,

    detail: "Lorem ipsum",
  },
  {
    id: 28,
    title: "Sugar - Crumb",
    qunatitigr: 1.55,
    stock: 9,
    imgurl: "http://dummyimage.com/129x100.png/dddddd/000000",
    price: 29,
    detail: "Lorem ipsum",
  },
  {
    id: 29,
    title: "Pernod",
    qunatitigr: 5.0,
    stock: 3,
    imgurl: "http://dummyimage.com/170x100.png/dddddd/000000",
    price: 22,
    detail: "Lorem ipsum",
  },
  {
    id: 30,
    title: "Walkers Special Old Whiskey",
    qunatitigr: 1.18,
    stock: 10,
    imgurl: "http://dummyimage.com/235x100.png/ff4444/ffffff",
    price: 6,

    detail: "Lorem ipsum",
  },
  {
    id: 31,
    title: "Ham - Black Forest",
    qunatitigr: 4.99,
    stock: 4,
    imgurl: "http://dummyimage.com/108x100.png/cc0000/ffffff",
    price: 20,
    detail: "Lorem ipsum",
  },
  {
    id: 32,
    title: "Nestea - Ice Tea, Diet",
    qunatitigr: 4.91,
    stock: 2,
    imgurl: "http://dummyimage.com/136x100.png/cc0000/ffffff",
    price: 26,
    detail: "Lorem ipsum",
  },
  {
    id: 33,
    title: "Wine - Red, Cooking",
    qunatitigr: 4.29,
    stock: 8,
    imgurl: "http://dummyimage.com/213x100.png/5fa2dd/ffffff",
    price: 8,

    detail: "Lorem ipsum",
  },
  {
    id: 34,
    title: "Pastry - Chocolate Marble Tea",
    qunatitigr: 4.1,
    stock: 5,
    imgurl: "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
    price: 25,
    detail: "Lorem ipsum",
  },
  {
    id: 35,
    title: "Oven Mitt - 13 Inch",
    qunatitigr: 4.19,
    stock: 6,
    imgurl: "http://dummyimage.com/226x100.png/cc0000/ffffff",
    price: 12,
    detail: "Lorem ipsum",
  },
];

function getItems() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(products);
    }, 3000)
  });
}

export function getSingleItem() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(products[0]);
    }, 3000)
  });
}
export default getItems;
