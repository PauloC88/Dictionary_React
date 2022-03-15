import React from 'react';

export function updStateSearchRes(message) {
  this.setState(message);
}

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResMessage: ''};
  }

  componentDidMount() {
    updStateSearchRes = updStateSearchRes.bind(this);
  }

  render() {
    return (
      <>
        <div>
          {this.state.searchResMessage}
        </div>
      </>
    );
  }
}

export default SearchResult;