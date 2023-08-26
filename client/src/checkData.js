import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckData() {
  const [matchingData, setMatchingData] = useState([]);
  const [differentData, setDifferentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/checkData')  // Replace with your API endpoint
      .then(result => {
        const { matching_records, different_records } = result.data;
        setMatchingData(matching_records);
        setDifferentData(different_records);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App container">
      <h1>Comparison Result</h1>
      <div className="table">
        <h2>Matching Data</h2>
        <table className="table">
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
            {matchingData.map(data => (
              <tr key={data.id}>
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
            ))}
          </tbody>
        </table>
      </div>
      <div className="table">
        <h2>Different Data</h2>
        <table className="table">
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
            {differentData.map(data => (
              <tr key={data.id}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckData;
