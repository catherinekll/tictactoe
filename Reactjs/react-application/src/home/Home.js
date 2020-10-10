import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src={"/images/background.jpg"} alt={"background"} height={'500px'}/>
        <h1>Welcome to Cat's homepage</h1>
      </div>
    )
  }
}

export default Home;