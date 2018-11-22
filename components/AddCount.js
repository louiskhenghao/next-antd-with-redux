import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class AddCount extends PureComponent {
  static propTypes = {
    add: PropTypes.func,
    decrease: PropTypes.func,
    count: PropTypes.number,
  };

  static defaultProps = { add: null, decrease: null, count: 0 };

  render() {
    const { count } = this.props;
    return (
      <div className="mb20">
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <Button className="mr5" onClick={this.props.add}>
          Add To Count
        </Button>
        <Button onClick={this.props.decrease}>Decrease Count</Button>
      </div>
    );
  }
}

export default AddCount;
