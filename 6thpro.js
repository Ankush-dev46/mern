App_Filter.js
import { useState } from 'react';

function App() {
  const initiallist = ['abcd', 'fghi', 'jklm', 'adfg', 'nmop', 'tvyz'];
  const [list, updateList] = useState(initiallist);
  const filterList = (event) => {
    const filtered = [];
    if (event.target.value) {
      for (let i = 0; i < initiallist.length; i++) {
        if (initiallist[i].includes(event.target.value))
          filtered.push(initiallist[i]);
      }
      updateList(filtered);
    }
    else
      updateList(initiallist);
  };
  return (
    <div className="App">
      <label>Search : </label>
      <input type='text' onChange={(e) => filterList(e)} />
      {(list) ? <ul>
        {list.map((element, key) => {
          return (<li key={key}>{element}</li>)
        })}
      </ul> : <></>}
    </div>
  );
}

export default App;
