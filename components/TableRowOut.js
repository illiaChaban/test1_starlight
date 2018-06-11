const style = {
    cell: {
        border: '1px solid black',
        height: '50px',
        padding: 0,
        textAlign: 'center',
    }
}

let TableRowOut = ({data}) => {
    return (
        <tr style={{width: '100%'}}>
            {Object.keys(data).map( (name,i) => {
                return (
                    <td 
                        key={i}
                        style={style.cell}>
                        {data[name]}
                    </td>
                )
            })}
        </tr>
    )
}

export default TableRowOut;