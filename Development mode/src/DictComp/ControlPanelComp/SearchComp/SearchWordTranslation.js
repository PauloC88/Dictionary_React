import {useState} from 'react';
import {updStateWordsRoEn} from '../../WordListComp/WordsRoEn';
import {wordsAndTranslations} from '../AddWord';
import {updStateWarning} from '../Warning';
import {updStateSearchRes} from '../SearchResult';

function SearchWordTranslation() {
  const [searchedWordAndTr, setsearchedWordAndTr] = useState('');

	function searchTranslation() {
	  updStateSearchRes({searchResMessage: ""});
	  updStateWarning({warningMessage: ""});
	  let wordExists = 0; 
	  for (let i = 0; i < wordsAndTranslations.length; ++i) { 
	    if (wordsAndTranslations[i].word === searchedWordAndTr) {
	      wordExists = 1;
	    }
	  }
	  if (wordExists === 0) {
	    updStateSearchRes({searchResMessage: "Cuvântul căutat nu există în dicționar!"});
	  }
	}

	function onSubmit(e) {
	  e.preventDefault();
	}

  function onClick() {
		searchTranslation();
		updStateWordsRoEn({wordsAndTranslations: wordsAndTranslations.filter(el => el.word === searchedWordAndTr)});
	}

  return (
    <>
      <h6>Caută un cuvânt și află traducerea in engleză.</h6>
      <form onSubmit={onSubmit}>
        <div className="mb-3" sstyle={{width: '11rem'}}>
          <input type="text" className="form-control" id="searchbox2" placeholder="Cuvânt în română" name="Search2" 
            required pattern="^[A-Za-z]{2,35}$" onChange={event => setsearchedWordAndTr(event.target.value.toLowerCase())}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onClick}>Caută traducerea</button>
      </form>
    </>
  );
}

export default SearchWordTranslation;