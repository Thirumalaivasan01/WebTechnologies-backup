//Mounting phase

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "mounting phase"
    };
    console.log("constructor executed");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("get derived state from props executed");
    console.log(state);
  }
  render() {
    console.log("render method executed");
    return <div>{this.state.txt}</div>;
  }
  componentDidMount() {
    console.log("component did mount");
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
