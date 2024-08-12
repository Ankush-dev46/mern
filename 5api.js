App_API.js
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      const apiData = await response.json();
      setData(apiData['data']);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {data && (<table>
        <tr>
          {Object.keys(data[0]).map((keys) => {
            return (<th>{keys}</th>)
          })}
        </tr>
        {data.map((rowData) => {
          return (<tr>
            {Object.values(rowData).map((cellData) => {
              return (<td>{cellData}</td>)
            })}
          </tr>)
        })}
      </table>)}
    </div>
  );
}

export default App;
