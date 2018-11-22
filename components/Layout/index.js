import React, { Component } from 'react';
import _ from 'lodash';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import { Layout as AntLayout } from 'antd';

class Layout extends Component {
  state = {
    width: 0,
    height: 0,
    mode: 'desktop',
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      mode: window.innerWidth > 1087 ? 'desktop' : 'mobile',
    });
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', _.throttle(this.updateDimensions, 500));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    return (
      <AntLayout>
        <Header />
        <div className="section">{this.props.children}</div>
        <Footer />
      </AntLayout>
    );
  }
}

export default Layout;
