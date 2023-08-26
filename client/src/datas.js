import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Datas() {
  const [queriedData, setQueriedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getData')  // Replace with your API endpoint
      .then(resuft => {
        if (Array.isArray(resuft.data)) {
          setQueriedData(resuft.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App container">
      <Link to = "/createData" className='btn btn-success'>AppData</Link>
      <Link to = "/checkData" className='btn btn-info'>CheckData</Link>
      <h1>Query Data</h1>
      <div className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Reference</th>
            <th>Time</th>
            <th>Amount</th>
            <th>ccy</th>
            <th>purpose</th>
            <th>fromMember</th>
            <th>fromUser</th>
            <th>fromAccount</th>
            <th>toType</th>
            <th>toAccount</th>
            <th>toMember</th>
          </tr>
        </thead>
        <tbody>
          {
            queriedData.map((data) =>{
              return <tr>
                <td>{data.id}</td>
                <td>{data.reference}</td>
                <td>{data.time}</td>
                <td>{data.amount}</td>
                <td>{data.ccy}</td>
                <td>{data.purpose}</td>
                <td>{data.fromMember}</td>
                <td>{data.fromUser}</td>
                <td>{data.fromAccount}</td>
                <td>{data.toType}</td>
                <td>{data.toAccount}</td>
                <td>{data.toMember}</td>
              </tr>
            })
          }
        </tbody>
      </div>
    </div>
  );
}

export default Datas;
