// const React = {
//   createElement(type, props, ...children) {
//     const reactElement = {
//       type,
//       props: {
//         ...props,
//         children,
//       },
//     };
//     return reactElement;
//   },
// };

import React from "./react";
import { render } from "./react-dom";

import "./App.css";

// const h1 = (
//   <h1>
//     {"Hello World"}
//     {"React JS"}
//   </h1>
// );
// const div = (
//   <div className="container" id="app" title="hello world">
//     {"Hello World "}
//     <b className="Hi">Hi</b>
//   </div>
// );

// const div2 = <div>div 2</div>;

// const fruits = ["Apples", "Mango", "Grapes", "Banana"];

// function Card(props) {
//   //   console.log(props);
//   return (
//     <div
//       className="container"
//       // id="app" title="hello world"
//     >
//       {/* {"Hello World "} */}
//       {/* <b className="Hi">Hi</b> */}
//       {/* [ 'hi', 'bye' ] */}
//       {/* {props.children} */}
//       <ul>
//         {fruits.map((fruit) => (
//           <li>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// console.log(<Card />);

function Card({ title, image, brand, price }) {
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

fetch("https://dummyjson.com/products")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log("Fetched data:", data); // Log the fetched data
    if (!data.products || !Array.isArray(data.products)) {
      throw new Error("Invalid data structure: products array not found");
    }
    const element = (
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>
    );
    console.log("React element to render:", element); // Log the element before rendering
    render(element, document.getElementById("root"));
  })
  .catch((error) => {
    console.error("Error:", error);
    // Render an error message to the DOM
    render(
      <div className="error">
        <h2>Error loading products</h2>
        <p>{error.message}</p>
      </div>,
      document.getElementById("root")
    );
  });

// render(
//   <Card>
//     <h1>Card</h1>
//   </Card>,
//   document.getElementById("root")
// );

// console.log(h1);
