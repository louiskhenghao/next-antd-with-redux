import React, { PureComponent } from 'react';
import { Button, Radio, Icon } from 'antd';
import AddCount from 'containers/AddCount/connector';
import Clock from 'containers/Clock/connector';
import styles from './styles';

export default class Home extends PureComponent {
  state = {
    size: 'large',
  };

  // ====================== EVENT
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  // ====================== RENDER
  render() {
    const { size } = this.state;
    return (
      <div id="home" className="container full-height-min">
        <AddCount />
        <Clock />
        <br />
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        <style jsx>{styles}</style>
      </div>
    );
  }
}
