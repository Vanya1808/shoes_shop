import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  render() {
    return <div></div>;
  }
}

export default Details;
