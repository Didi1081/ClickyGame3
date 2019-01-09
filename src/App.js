import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
const charactersArray = [
  {
    id: 0,
    name: "Mrs. Meow",
    img: "http://pluspng.com/img-png/kawaii-transparent-png-clip-arts-related-to-png-kawaii-tumblr-500.png"
  },
  {
    id: 1,
    name: "Mr. Meow",
    img: "https://i.pinimg.com/originals/8e/d6/23/8ed62368cc6a5fe635694be6cf8316d2.png"

  },
  {
    id: 2,
    name: "Gary",
    img: "https://stickershop.line-scdn.net/stickershop/v1/product/1361417/LINEStorePC/main.png;compress=true"
  },

  {
    id: 3,
    name: "Newie",
    img: "https://newvitruvian.com/images/nutella-transparent-kawaii-2.png"
  },

  {
    id: 4,
    name: "Hungry Cats",
    img: "https://stickershop.line-scdn.net/stickershop/v1/product/1627843/LINEStorePC/main.png;compress=true"

  },

  {
    id: 5,
    name: "Sandy",
    img: "https://sdl-stickershop.line.naver.jp/products/0/0/1/1231227/LINEStorePC/main.png?__=20161019"

  },
  {
    id: 6,
    name: "Tom",
    img: "https://media3.giphy.com/avatars/aminalstickers/EmxsihUmkmYC.png"

  },

  {
    id: 7,
    name: "Starbucks",
    img: "https://data.whicdn.com/images/177778766/original.png"

  }
];
class App extends Component {
  state = {
    characters: charactersArray,
    score: 0,
    clicked: []
  }




  handleClick = (id)=> {
  
    this.shuffle(charactersArray);

    if(!this.state.clicked.includes(id)){
      this.setState({
        clicked: [...this.state.clicked, id],
        score: this.state.score + 1
      })
    }else {
        this.setState({score:0, clicked: []});
      alert('You lose!')
    }
  }

  shuffle = (array) => {

        var m = array.length;
        var temp;
        var randomIndex;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          randomIndex = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          temp = array[m];
          array[m] = array[randomIndex];
          array[randomIndex] = temp;
        }
      
  }

  render() {
    return (
      <div>
      <Header title="Didi's Game" score={this.state.score}/>
      <div className="cardContainer">
      {
        this.state.characters.map(ele => {
            return <Card id={ele.id} handleClick={this.handleClick} img={ele.img} name={ele.name}/>
        })
      }
      </div>
      </div>
    );
  }
}

export default App;
