import React, { Component } from 'react';
import { Card } from 'antd';
import AddCount from 'components/AddCount';

export default class AddCountContainer extends Component {
  render() {
    const { counter } = this.props;
    return (
      <Card title="Number Count" className="mb20">
        <AddCount
          add={this.props.dispatchIncrement}
          decrease={this.props.dispatchDecrement}
          count={counter}
        />
      </Card>
    );
  }
}
