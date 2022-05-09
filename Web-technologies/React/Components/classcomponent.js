class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header Class Component </h1>
        <h3>Hello {this.props.name}</h3>
        <p>Good Evening</p>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return <h5>This is {this.props.fname}</h5>;
  }
}
class Footer extends React.Component {
  render() {
    return <p> Footer...</p>;
  }
}
ReactDOM.render(
  <div>
    <Header name="Ram" />
    <Content fname="Vaibav" />
    <Footer />
  </div>,
  document.getElementById("root")
);
