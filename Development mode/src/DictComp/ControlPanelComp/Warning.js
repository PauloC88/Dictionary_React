import React from 'react';

export function updStateWarning(warningMessage) {
  this.setState(warningMessage);
}

class Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {warningMessage: ''};
  }

  componentDidMount() {
    updStateWarning = updStateWarning.bind(this);
  }

  render() {
    return (
      <>
      	<div>
        	{this.state.warningMessage}
        </div>
      </>
    );
  }
}

export default Warning;