import React from "react";

class Startbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
  }

  changeColor = () => {
    this.setState({ numClicks: this.state.numClicks + 1 });
  };

  render() {
    const currentStyle = {
      backgroundColor: "grey",
    };

    if (this.state.numClicks % 3 === 0) {
      currentStyle.backgroundColor = "Red";
    } else if (this.state.numClicks % 3 === 1) {
      currentStyle.backgroundColor = "Yellow";
    } else if (this.state.numClicks % 3 === 2) {
      currentStyle.backgroundColor = "Green";
    }

    return (
      <button style={currentStyle} onClick={() => this.changeColor()}>
        Start!
      </button>
    );
  }
}

export default Startbutton;
