function ShowDataInTable({ data, onRowClick }) {
    //const { data } = props
    let keys = Object.keys(data[0])
    return <>
        <table className="table">
            <thead>
                <tr>
                    {
                        keys.map((x, i) => {
                            return <th key={i}>{x}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((x, i) => {
                        return <tr onClick={() => onRowClick(x)} key={i}>
                            {
                                keys.map((y, ind) => {
                                    return <td key={ind}>{x[y]}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}


export default ShowDataInTable;