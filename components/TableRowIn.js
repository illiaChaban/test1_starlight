import TableCellIn from './TableCellIn';

export const columns = [
    'first-name',
    'last-name',
    'annual-salary',
    'super-rate',
    'payment-start-date',
]

let TableRowIn = ({ index, handleChange }) =>
    <tr>
        { columns.map( (name,i) => {
            return <TableCellIn 
                        key={i}
                        name={name} 
                        handleChange={(e)=> handleChange(e, index)}
                        />
        })}
    </tr>

export default TableRowIn;