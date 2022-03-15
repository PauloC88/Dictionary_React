import React from 'react';

export function updStateWordsRoEn(array) {
  this.setState(array);
}

class WordsRoEn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wordsAndTranslations: []};
  }

  componentDidMount() {
    updStateWordsRoEn = updStateWordsRoEn.bind(this);
  }

  render() {
    let index = 0;
    return (
      <>
      	<div>
	        {this.state.wordsAndTranslations.map((wordAndTranslation) => {
	          const {word, translation} = wordAndTranslation;
	          return (
	          	<div key={++index}>
		            <section>
		              <div className="word-item">{word}</div>
		              <div className="word-item">{translation}</div>
		            </section>
	            </div>
	          );
	        })}
	      </div>
      </>
    );
  }
}

export default WordsRoEn;