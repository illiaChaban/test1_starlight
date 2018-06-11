import React from 'react';
import calculate from '../lib/calculate';

const columns = [
    'name',
    'pay-period',
    'gross-income',
    'income-tax',
    'net-income',
    'super-amount',
]

const style = {
    cell: {
        border: '1px solid black',
        height: '50px',
        padding: 0,
        textAlign: 'center',
    }
}

let TableRow = ({data}) => {
    // console.log(data)
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


class OutputTable extends React.Component {
    render() {
        let { data } = this.props;
        let newData = calculate(data);
        // console.log(newData)
        return (
            <div>
                <table
                    style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            {columns.map( (name, i) => (
                                <th 
                                    key={i} 
                                    style={{width: '100px', border: '1px solid black'}}>
                                    {name}
                                </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {newData.map( (dataObj, i) => <TableRow key={i} data={dataObj}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OutputTable;