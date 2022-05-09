// const e1 = React.createElement("h1", null, "React JS Excercise.");

// ReactDOM.render(e1, document.getElementById("root"));

// //displaying list

// const list = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "Car"),
//   React.createElement("li", null, "Bike")
// );

// ReactDOM.render(list, document.getElementById("root"));

const mobiles = ["iphone", "samsung", "Redmi", "Realme", "oneplus"];
var temp;
a = 10;
console.log(a);

const element = React.createElement(
  "ul",
  { style: { color: "red" } },
  mobiles.map((mobile, index) => {
    return React.createElement(
      "li",
      { key: index, style: { color: "blue" } },
      mobile
    );
  })
);
ReactDOM.render(element, document.getElementById("root"));
