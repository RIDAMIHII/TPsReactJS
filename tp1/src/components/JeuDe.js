import React, { Component } from 'react'

export class JeuDe extends Component {

    constructor(props){
        super(props);
        this.state = {
            face: null,
            conteur : 0,
            FinJeu : false,
        }
    }

    handleClick = ()=>{
        let valAlea = Math.floor((Math.random()*6)+1);
        this.setState({
            face:valAlea,
            conteur : this.state.conteur+1
        });

        if(valAlea === this.props.faceGagnante){
            this.setState(
                {FinJeu : true}
            );
        }
    }

    handleInit = ()=>{
        this.setState ({
            face: null,
            conteur : 0,
            FinJeu : false,
        });
    }



  render() {
    return (
      <div>

        <br /><br />
        <img src={this.state.face === null?"images/face1.jpeg":`images/face${this.state.face}.jpeg`} alt="" width={150}/>
        <h1>Jeu de De.....</h1>
        <h2>Face : {this.state.face} </h2>
        <h2>Nombre d'essais : {this.state.conteur}</h2>


        {
            this.state.FinJeu?
                <div>
                    <h2>Bravo , vous avez gagner</h2>
                    <button onClick={this.handleInit}>Initialiser</button>
                </div>
                : <button onClick={this.handleClick}>Jouer</button>
        }
        
        
      </div>
    )
  }
}

export default JeuDe
