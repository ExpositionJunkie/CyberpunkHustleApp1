import React, { Component } from "react";
import { HUSTLETABLES } from "../shared/hustleTables";
import ClassDirectory from "./ClassDirectoryComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hustle: HUSTLETABLES,
    };
  }

  render() {
    console.log("STATE IN MAIN COMPONENT" + this.state.hustle);
    return <ClassDirectory hustle={this.state.hustle} />;
  }
}

export default Main;
