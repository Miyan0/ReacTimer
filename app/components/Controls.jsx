import React, { Component } from 'react'

export default class Controls extends Component {

  render() {
    let { countdownStatus } = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controls.PropTypes = {
  countdownStatus: React.PropTypes.string.isRequired
}
