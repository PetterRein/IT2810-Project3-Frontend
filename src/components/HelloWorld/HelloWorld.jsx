import React from 'react'

class HelloWorld extends React.Component {
  state = {
    helloWorldText: undefined,
    intervalIsSet: false,
  }

  componentDidMount() {
    this.fetchHelloWorld();
  }


  fetchHelloWorld = () => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.text())
      .then((responseText) => this.setState({ helloWorldText: responseText }));
  };

  render() {
    const { helloWorldText } = this.state;
    return (
      <div>{helloWorldText ? helloWorldText : ""}</div>
    );
  }
}

export default HelloWorld;
