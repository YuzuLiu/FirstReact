import React from "react";
import Checkbox from "./Checkbox";

function Main() {
  return (
    <main>
      <h2>This is a TODO List.</h2>

      <div>
        <Checkbox todo="Throw the garbage out." />
        <Checkbox todo="Clean the laundry." />
        <Checkbox todo="Go to the supermarket and buy dinner." />
      </div>
    </main>
  );
}

export default Main;
