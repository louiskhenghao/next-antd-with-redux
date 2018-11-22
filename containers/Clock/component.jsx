import React, { Component } from 'react';
import { Button, Card } from 'antd';
import Clock from 'components/Clock';

export default class ClockContainer extends Component {
  componentDidMount() {
    this.props.dispatchStartClock();
  }

  onStartTick = () => {
    this.props.dispatchTickClock();
  };

  onStopTick = () => {
    this.props.dispatchStopClock();
  };

  render() {
    const { clock } = this.props;
    return (
      <Card title="Clock Tick">
        <Clock lastUpdate={clock.get('lastUpdate')} />
        <div className="mb20">
          The Clock is now {clock.get('status')}
          {clock.get('status') === 'start' &&
            ' but is not running, you can run the clock by clicking "Start Tick" button'}
        </div>
        <Button className="mr5" onClick={this.onStartTick}>
          Start Tick
        </Button>
        <Button onClick={this.onStopTick}>Stop Tick</Button>
      </Card>
    );
  }
}
