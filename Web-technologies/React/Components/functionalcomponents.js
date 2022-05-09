function Header(propsArg) {
  return (
    <div>
      <h1>This is Head tag of Functional Component </h1>
      <p>The User Name is : {propsArg.userName + " " + propsArg.wish} </p>
    </div>
  );
}

ReactDOM.render(
  <Header userName="Ajay" wish="Hi" />,
  document.getElementById("root")
);
