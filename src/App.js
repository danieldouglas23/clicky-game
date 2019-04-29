import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click a character to start game'
  };

  shuffleArray = (array) => {
    let charactersArray = characters;
    for (let i = charactersArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [charactersArray[i], charactersArray[j]] = [charactersArray[j], charactersArray[i]];
    }
    return charactersArray;
  }

  selectCharacter = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct!"
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: click character to play again",
        correct: 0,
        picked: []
      })
    }
  }

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    return (
      <div>
        <NavBar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}></NavBar>
        <br />
        <br />
        <Header></Header>
        <Wrapper>
          <div class="row">
            {/* <div class="column"> */}
              {this.shuffleArray().map(character => (
                <CharacterCard image={character.image} name={character.name} key={character.name} selectCharacter={this.selectCharacter} />
              ))}
            {/* </div> */}
          </div>

        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
