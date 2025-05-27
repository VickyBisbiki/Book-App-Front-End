import {useState} from "react";
import CustomerList from "../componets/CustomersList";
import CustomerForm from "../componets/CustomerForm";

export default function CustomerPage(){
    const [editItem, setEditItem] = useState(null);
    const [reloadToggle, setReloadToggle] = useState(false);

    const refresh = () => setReloadToggle(!reloadToggle); //cheap way to force list page
    

    return (
        <div>
            <CustomerForm
                key = {editItem?.id ?? "new"} //reset form when swiching modes
                current={editItem}
                onSaved={() => {setEditItem(null); refresh(); }}
                onCancel={() => setEditItem(null)}
                />
                {/*pass dummyprop so list re-fetched */}
                <CustomerList key={reloadToggle} onEdit={setEditItem}/>
        </div>
    );
}