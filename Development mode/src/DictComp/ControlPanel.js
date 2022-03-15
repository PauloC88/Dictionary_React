import AddWord from './ControlPanelComp/AddWord';
import Search from './ControlPanelComp/Search';
import SearchResult from './ControlPanelComp/SearchResult';

function ControlPanel() {
  return (
  	<>
	    <div className="card" style={{width: '70rem'}}>
	      <div className="card-header">
	        <center><h5>Dicționar Român - Englez</h5></center>
	      </div>
	      <AddWord />
	      <Search />
	    </div>
	    <div style={{width: '70rem', color: 'red', textAlign: 'center', backgroundColor: 'lightsteelblue', fontWeight: 'bold'}}>
        <SearchResult />
      </div>
    </>
  );
}

export default ControlPanel;