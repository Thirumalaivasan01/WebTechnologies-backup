class Parent extends React.Component {
  state = {
    txt: "hello"
  };
  render() {
    return (
      <div>
        <h1>Parent Class</h1>
        <h1> {this.state.txt}</h1>
        <Child action={this.getData.bind(this)}></Child>
      </div>
    );
  }
  getData(childData) {
    this.setState({
      txt: childData
    });
  }
}
function Child(propsA) {
  const msg = "childComponent Hello";
  return (
    <div>
      <h1>Child Method</h1>
      <button onClick={() => propsA.action(msg)}>
        Click to change to child
      </button>
    </div>
  );
}
ReactDOM.render(<Parent></Parent>, document.getElementById("root"));
