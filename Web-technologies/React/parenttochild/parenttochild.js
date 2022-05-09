function App(props) {
  return (
    <div>
      <h1>Came inside App</h1>
      <Home AppName="Amazon Prime" userName={props.user}></Home>
    </div>
  );
}
function Home(props) {
  return (
    <div>
      <h1>Came to Home from App</h1>
      <h4>AppName : {props.AppName}</h4>
      <h4>User Name: {props.userName}</h4>userNa
    </div>
  );
}
ReactDOM.render(<App user="Ram"></App>, document.getElementById("root"));
