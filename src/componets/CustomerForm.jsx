import { useState, useEffect } from "react";
import { createCustomer, updateCustomer } from "../api/customers";

export default function CustomerForm({current, onSaved, onCancel}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameErr,  setNameErr]  = useState("");
    const [emailErr, setEmailErr] = useState("");


    useEffect(() => {
        setName(current?.name  ?? "");
        setEmail(current?.email ?? "");

    },[current]);

     const validate = () => {
        let ok = true;
        if (!name.trim())  { setNameErr("Name required");   ok = false; }
        else               { setNameErr(""); }
    
        if (!/^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/.test(email)) {
            setEmailErr("Invalid email");
            ok = false;
        } else { setEmailErr(""); }
    
        return ok;
    };

    const save = e => {
        if(!validate()) return;
        e.preventDefault();
        const body = {id: current?.id, name, email};
        const op = current ? updateCustomer(body): createCustomer(body);
        op.then(onSaved);
    };

    return (

        // <form onSubmit={save}>
        //     <h3>{current ? "Edit Customer" : "New Customer"}</h3>
        //     <input value = {name} onChange={e=>setName(e.target.value)} placeholder="Name" required/>
        //     <input value = {email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required/>
        //     <button type="submit">Save</button>
        //     {current && <button type="button" onClick={onCancel}>Cancel</button>}
        // </form>
        
        <form onSubmit={save} className="p-3 border rounded shadow-sm">
            <h3 className="mb-3">{current ? "Edit" : "New"} Customer</h3>

            <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                className={`form-control ${nameErr && "is-invalid"}`}
                value={name}
                onChange={e => setName(e.target.value)}
                />
                {nameErr && <div className="invalid-feedback">{nameErr}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                type="email"
                className={`form-control ${emailErr && "is-invalid"}`}
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                {emailErr && <div className="invalid-feedback">{emailErr}</div>}
            </div>

            <button className="btn btn-primary me-2">Save</button>
            {current && (
                <button type="button" onClick={onCancel} className="btn btn-secondary">
                Cancel
                </button>
            )}
        </form>

        
    );


}