import React, { Component } from "react";
import "./Character.css";

export class Character extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div>Name: {this.props.characterProps.name}</div>
        <div>Height: {this.props.characterProps.height}</div>
        <div>Gender: {this.props.characterProps.gender}</div>
        <div>Birth Year: {this.props.characterProps.birth_year}</div>
      </div>
    );
  }
}
