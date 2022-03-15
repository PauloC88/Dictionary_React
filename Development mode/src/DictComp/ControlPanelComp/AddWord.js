import Warning from './Warning';
import {useState} from 'react';
import {updStateWordsRoEn} from '../WordListComp/WordsRoEn';
import {updStateWarning} from './Warning';
import {updStateSearchRes} from './SearchResult';

const wordsAndTranslations = restoreArray();
setTimeout(function() {updStateWordsRoEn({wordsAndTranslations});}, 100);

function restoreArray() {
	const array = [];
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        getWordpairs(this);
    }
	};
	xhttp.open("GET", "wordlist.xml", true);
	xhttp.send();

	function getWordpairs(xml) {
	  let xmlDoc = xml.responseXML;
	  let wordpairs = xmlDoc.getElementsByTagName('wordpair');
	  for (let x of wordpairs) {
	  	array.push({word: x.children[0].innerHTML, translation: x.children[1].innerHTML});
	  }
	}
	return array;
}

function AddWord() {
  const [roWord, setRoWord] = useState('');
  const [translation, setTranslation] = useState('');

	function validateFormat(input) {
	  return /^[a-z]{2,35}$/.test(input);
	}

	function addWord() {
	  updStateWarning({warningMessage: ""});
	  updStateSearchRes({searchResMessage: ""});
	  if (!validateFormat(roWord) || !validateFormat(translation)) {
	    updStateWarning({warningMessage: "Introduceți doar litere! Minim 2, maxim 35."});
	  } else { 
	    let wordExists = 0; 
	    for (let i = 0; i < wordsAndTranslations.length; ++i) { 
	      if (wordsAndTranslations[i].word === roWord) {
	        wordExists = 1;
	      }
	    }
	    if (wordExists === 0) {
	    	wordsAndTranslations.push({word: roWord, translation: translation});
				const xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
			    if (this.readyState === 4 && this.status === 200) {
			        addNodes(this);
			    }
				};
				xhttp.open("GET", "wordlist.xml", true);
				xhttp.send();

				function addNodes(xml) {
			    let xmlDoc, root, wordpair, newElement1, newText1, newElement2, newText2;
			    xmlDoc = xml.responseXML;
			    wordpair = xmlDoc.createElement("wordpair");
			    newElement1 = xmlDoc.createElement("roWord");
			    newText1 = xmlDoc.createTextNode(roWord);
			    newElement1.appendChild(newText1);
			    wordpair.appendChild(newElement1);
			    newElement2 = xmlDoc.createElement("translation");
			    newText2 = xmlDoc.createTextNode(translation);
			    newElement2.appendChild(newText2);
			    wordpair.appendChild(newElement2);
			    root = xmlDoc.getElementsByTagName("dictionary")[0];
			    root.appendChild(wordpair);
			    console.log(wordpair);
				}
	    } else {
	      updStateSearchRes({searchResMessage: "Cuvântul există deja în dicționar și nu a fost adăugat incă o dată!"});
	    }
	  }
	}

	function onSubmit(e) {
	  e.preventDefault();
	}

  function onClick() {
		addWord(); 
		updStateWordsRoEn({wordsAndTranslations});
  }

  return (
  	<>
	    <div className="card-body" style={{width: '35rem'}}>
	      <h6> Adaugă un cuvânt în <strong>română</strong> și traducerea lui în <strong>engleză</strong>.</h6><br/>
	      <form onSubmit={onSubmit}>
	        <div className="mb-3" style={{width: '11rem'}}>
	          <label>Cuvânt în română</label>
	          <input type="text" className="form-control" id="word" placeholder="exemplu" 
	            onChange={event => setRoWord(event.target.value.toLowerCase())}/>
	          <label>Traducere</label>
	          <input type="text" className="form-control" id="translation" placeholder="example" 
	            onChange={event => setTranslation(event.target.value.toLowerCase())}/>
	          <div id="warning_message" style={{color: 'red', fontWeight: 'bold'}}>
	            <Warning />
	          </div>
	        </div>
	        <button type="submit" className="btn btn-primary" onClick={onClick}>Adaugă</button>
	      </form>
	      <br/><br/>
	    </div>
    </>
  );
}

export default AddWord;
export {wordsAndTranslations};
