import {useState} from 'react';
import {updStateWordsRoEn} from '../../WordListComp/WordsRoEn';
import {updStateWarning} from '../Warning';
import {updStateSearchRes} from '../SearchResult';
import {wordsAndTranslations} from '../AddWord';

function CheckWordExists() {
  const [searchedWord, setSearchedWord] = useState('');

	function searchWord() {
	  updStateWarning({warningMessage: ""});
	  let wordExists = 0; 
	  for (let i = 0; i < wordsAndTranslations.length; ++i) {
	    if (wordsAndTranslations[i].word === searchedWord) {
	      wordExists = 1;
	    }
	  }
	  if (wordExists === 0) {
	    updStateSearchRes({searchResMessage: "Cuvântul căutat nu există în dicționar!"});
	  } else {
	    updStateSearchRes({searchResMessage: "Cuvântul căutat există în dicționar!"});
	  }
	}

	function onSubmit(e) {
	  e.preventDefault();
	}

  function onClick() {
		searchWord(); 
		updStateWordsRoEn({wordsAndTranslations});
	}

  return (
    <>
    	<div>
	      <h6>Verifică dacă un cuvânt există deja în dicționar.</h6>
	      <form onSubmit={onSubmit}>
	        <div className="mb-3" style={{width: '11rem'}}>
	          <input type="text" className="form-control" id="searchbox" placeholder="Cuvânt în română" name="Search" 
	            required pattern="^[A-Za-z]{2,35}$" onChange={event => setSearchedWord(event.target.value.toLowerCase())}/>
	        </div>
	        <button type="submit" className="btn btn-primary" onClick={onClick}>Caută cuvânt</button>
	      </form>
	      <br/>
      </div>
    </>
  );
}

export default CheckWordExists;