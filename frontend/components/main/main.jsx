import React from 'react';
import MainNav from './main_nav';
import MainSlideshow from './main_slideshow';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <MainNav/>
        <div className="main-content">
          <MainSlideshow/>
        </div>
      </div>
    );
  }
}