const fruits = ["Apple", "banana", "Orange", "Grapes"];

const element = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}> {fruit} </li>;
    })}
  </ul>
);
ReactDOM.render(element, document.getElementById("root"));
