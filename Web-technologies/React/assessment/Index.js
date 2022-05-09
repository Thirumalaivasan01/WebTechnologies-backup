// var str = "Hello Javascript";
// var result = "";
// for (var i = str.length; i >= 0; i--) {
//   result = result + str.charAt(i);
// }
// console.log(result);

import React from "react";
import Child from "./Child";
const [fruit, setfruit] = useState("apple");
function Index() {
  return (
    <div>
      <Child fruit={fruit}></Child>
    </div>
  );
}

export default Index;
