import React, { Component } from 'react';

class Kid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: 'nervous',
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props, state);
    if (props.furtherSteps.length && state.danceSteps.length !== 5) {
      return {
        danceSteps: state.danceSteps.concat(props.furtherSteps),
        startedPerforming: true
      };
    }
    if (props.isApplauded) {
      return {
        emotion: 'happy'
      };
    }
    return false;
  }

  qualified() {
    this.setState({ startedPerforming: false });
  }

  componentDidMount() {
    this.setState({ danceSteps: ['step1', 'step2'] });
  }

  componentDidUpdate() {
    if (this.props.isQualified && this.state.startedPerforming) {
      this.qualified();
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    this.props.unmountJudge();
  }

  render() {
    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;

    // console.log(danceSteps);

    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        <div>Emotion: {emotion}</div>
        {startedPerforming && (
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

export default Kid;
