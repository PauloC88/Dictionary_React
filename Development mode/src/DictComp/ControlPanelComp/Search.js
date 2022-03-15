import CheckWordExists from './SearchComp/CheckWordExists';
import SearchWordTranslation from './SearchComp/SearchWordTranslation';
import {updStateWordsRoEn} from '../WordListComp/WordsRoEn';
import {updStateWarning} from './Warning';
import {updStateSearchRes} from './SearchResult';
import {wordsAndTranslations} from './AddWord';

function Search() {
	function onClick() {
		updStateSearchRes({searchResMessage: ""});
	  updStateWarning({warningMessage: ""});
		updStateWordsRoEn({wordsAndTranslations});
	}

  return (
    <div className="card-body" style={{width: '35rem', position: 'absolute', left: '35rem', top: '3rem'}}>
      <CheckWordExists />
      <SearchWordTranslation />
      <button type="submit" className="btn btn-primary" style={{position: 'relative', left: '150px', bottom: '38px'}} onClick={onClick}>
        Reafișează lista</button>
    </div>
  );
}

export default Search;