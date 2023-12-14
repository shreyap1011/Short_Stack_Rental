export default function ViewAllLandlordInfo() {
    let tenants = [];
    for(let i = 0; i< 20; i++) {
        let building_num = Math.floor(Math.random()*3) + 1;
        let status_num = Math.floor(Math.random()*2);
        let tenant = {
            building: building_num,
            unit: i + 1,
            name: "Tenant " + i,
            balance: "$$$",
            status: status_num == 0 ? "paid" : "unpaid"
        }
        tenants.push(tenant);
    }
    tenants.sort((a,b) => {
        if(a.building > b.building) return 1;
        if(a.building < b.building) return -1;
        return 0; 
    });

    return(
        <>
        <h2>All Tenants</h2>
        <table>
            <thead>
                <tr>
                    <th>Building</th>
                    <th>Unit</th>
                    <th>Tenant</th>
                    <th>Balance</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    tenants.map((tenant) => {
                        return (
                            <tr>
                                <td>{tenant.building}</td>
                                <td>{tenant.unit}</td>
                                <td>{tenant.name}</td>
                                <td>{tenant.balance}</td>
                                <td>{tenant.status}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}