import WordsRoEn from './WordListComp/WordsRoEn';

const imgs = [
  'https://img.icons8.com/color/48/000000/romania-circular.png',
  'https://img.icons8.com/color/48/000000/great-britain-circular.png',
];

function WordList() {
  return (
    <div className="card" style={{width: '70rem'}}>
      <div className="grid-container">
        <div className="head-grid"><p style={{color: 'royalblue'}}>
          <strong>Română</strong><img src={imgs[0]} alt="Romanian Flag"/></p>
        </div>
        <div className="head-grid"><p style={{color: 'royalblue'}}>
          <strong>Engleză</strong><img src={imgs[1]} alt="Great Britain Flag"/></p>
        </div>
      </div>
      <div className="grid-container" id="wordList">
        <WordsRoEn />
      </div>
    </div>
  );
}

export default WordList;