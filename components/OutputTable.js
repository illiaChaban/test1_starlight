import React from 'react';
import calculate from '../lib/calculate';
import TableRowOut from './TableRowOut';
import DataContext from './DataContext';

const columns = [
    'name',
    'pay-period',
    'gross-income',
    'income-tax',
    'net-income',
    'super-amount',
]

let OutputTable = ({data}) => {
    let newData = calculate(data);
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
                    {newData.map( (dataObj, i) => <TableRowOut key={i} data={dataObj}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default OutputTable;