function Logging() {
  let [sname, setName] = React.useState(["name1", "name2", "name3"]);
  let [randomArray, setRandomArray] = React.useState(["ABC", "DEF", "xyz"]);
  function changeName() {
    setName(sname => {
      let randomName = randomArray.pop();
      return [...sname, randomName];
    });
  }
  function removeName() {
    let temp = [...sname];
    let tempItem = temp.pop();
    setRandomArray(() => {
      return [tempItem, ...randomArray];
    });
    setName([...temp]);
  }

  return (
    <div>
      {sname.map((value, index, sname) => {
        return (
          <h1>
            {index}: {value}
          </h1>
        );
      })}
      <button onClick={changeName}>Change or Add Name</button>
      <button onClick={removeName}>Remove Name</button>
    </div>
  );
}
ReactDOM.render(<Logging />, document.getElementById("root"));
