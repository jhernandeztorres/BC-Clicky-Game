import React, {
  Component
} from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Image from "./components/Image/image.js"
import cards from "./components/Card/cards.json";

// Import Images
import Grammi from "./images/Grammi.png";
import Zummi from "./images/Zummi.png";
import Tummi from "./images/Tummi.png";
import Sunni from "./images/Sunni.png";
import Gruffi from "./images/Gruffi.png";
import Gusto from "./images/Gusto.png";
import Ogres from "./images/Ogres.png";
import Toadwart from "./images/Toadwart.png";
import Calla from "./images/Calla.png";
import Cavin from "./images/Cavin.png";
import Tuxford from "./images/Tuxford.png";
import Igthorn from "./images/Igthorn.png";

import "./App.css";
class App extends Component {
  state = {
    picked: [],
    correct: 0,
    highscore: 0,
    message: 'Click an image to being game.'
  };

  // shuffle
  shuffleArr = (arr) => {
    let imageArr = cards;
    for (let i = imageArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imageArr[i], imageArr[j]] = [imageArr[j], imageArr[i]];
    }
    return imageArr
  }

  pickImage = (name) => {
    let picked = this.state.picked;
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        highscore: this.state.correct + 1 > this.state.highscore ? this.state.correct + 1 : this.state.highscore,
        message: "Good pick!"
      })
      this.shuffleArr();
    } else {
      this.setState({
        message: "What?! You picked that already! Start Over!",
        correct: 0,
        picked: []
      })
    }
  }

  imageChange = (name) => {
    switch (name) {
      case "Grammi":
        return `${Grammi}`
      case "Zummi":
        return `${Zummi}`
      case "Tummi":
        return `${Tummi}`
      case "Gruffi":
        return `${Gruffi}`
      case "Gusto":
        return `${Gusto}`
      case "Sunni":
        return `${Sunni}`
      case "Toadwart":
        return `${Toadwart}`
      case "Ogres":
        return `${Ogres}`
      case "Tuxford":
        return `${Tuxford}`
      case "Calla":
        return `${Calla}`
      case "Cavin":
        return `${Cavin}`
      case "Igthorn":
        return `${Igthorn}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} highscore={this.state.highscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArr(cards).map(image => (
            <Image src={this.imageChange(image.name)} name={image.name} key={image.cards} pickImage={this.pickImage} />
          ))}
        </Main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;