import { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../api/customers";

export default function CustomerList({ onEdit }) {
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);

    const load = () =>
        getCustomers()
            .then(setData)
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false));

    useEffect(() => {
        load();
    }, []);

    if (loading) return <div className="alert alert-info">Loading...</div>;
    if (err) return <div className="alert alert-danger">{err}</div>;

    return (
        <div className="table-responsive mt-4">
            <table className="table table-bordered table-hover align-middle shadow-sm">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th style={{ width: "150px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(c => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => onEdit(c)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() =>
                                        deleteCustomer(c.id).then(load)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
