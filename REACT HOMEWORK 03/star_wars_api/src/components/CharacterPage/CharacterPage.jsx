import "./CharacterPage.css";
import { Character } from "../Character/Character";
import React, { Component } from "react";

export class CharacterPage extends Component {
  URL = "https://swapi.dev/api/people";
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  handleFetch = async () => {
    const response = await fetch(this.URL);
    const data = await response.json();
    console.log("res", data);
    this.setState({
      characters: data.results,
    });
  };

  componentDidMount() {
    this.handleFetch();
  }
  render() {
    return (
      <>
        <div className="heading">
          <h1>Star Wars Characters</h1>
        </div>

        {this.state.characters.length === 0 ? (
          <div className="loading">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
        ) : (
          <div className="characters">
            {this.state.characters.map((character) => (
              <Character key={character.name} characterProps={character} />
            ))}
          </div>
        )}
      </>
    );
  }
}
