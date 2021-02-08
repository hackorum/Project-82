import React, { Component } from "react";
import { Header } from "react-native-elements";

export default class AppHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 26, marginTop: -10 },
        }}
        backgroundColor="#2d4059"
      />
    );
  }
}
