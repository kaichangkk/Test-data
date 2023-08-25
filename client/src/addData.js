import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function CreateData() {
    const [id, setId] = useState("");
    const [reference, setReference] = useState("");
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState("0.00");
    const [ccy, setCcy] = useState("");
    const [purpose, setPurpose] = useState("");
    const [fromMember, setFromMember] = useState("");
    const [fromAccount, setFromAccount] = useState("");
    const [fromUser, setFromUser] = useState("");
    const [toAccount, setToAccount] = useState("");
    const [toMember, setToMember] = useState("");
    const [toType, setToType] = useState("");

    const Submit = (e) => {
        axios.post("http://localhost:3001/createData", {
            id,
            reference,
            time,
            amount,
            ccy,
            purpose,
            fromMember,
            fromAccount,
            fromUser,
            toAccount,
            toMember,
            toType,
        })

            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="d-flex vh-120 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={{ Submit }}>
                    <h2>Create Data</h2>
                    <div className="mb-2">
                        <label htmlFor="">ID</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Reference</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setReference(e.target.value)} />

                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Time</label>
                        <input type="datetime-local" className="form-control" onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="ccy">ccy</label>
                        <select className="form-control" id="ccy" onChange={(e) => setCcy(e.target.value)}>
                            <option value="">Choose an option</option>
                            <option value="LAK">LAK</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">purpose</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setPurpose(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="fromMember">fromMember</label>
                        <select className="form-control" id="fromMember" onChange={(e) => setFromMember(e.target.value)}>
                            <option value="">Choose an option</option>
                            <option value="JDB">LDB</option>
                            <option value="BCEL">BCEL</option>
                            <option value="APB">APB</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">fromUser</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setFromUser(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">fromAccount</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setFromAccount(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="toType">toType</label>
                        <select className="form-control" id="toType" onChange={(e) => setToType(e.target.value)}>
                            <option value="">Choose an option</option>
                            <option value="ACCOUNT">ACCOUNT</option>
                            <option value="QR">QR</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">toAccount</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setToAccount(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="toMember">toMember</label>
                        <select className="form-control" id="toMember" onChange={(e) => setToMember(e.target.value)}>
                            <option value="LDB">LDB (Default)</option>
                        </select>
                    </div>

                    <div className="mb-2" style={{ textAlign: "center" }}>
                        <button className="btn btn-success" onClick={Submit}>Create</button>
                        <span style={{ margin: '0 20px' }}></span>
                        <Link to="/getData" className='btn btn-warning'>Return</Link>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default CreateData;