import TableCellIn from './TableCellIn';

export const columns = [
    'first-name',
    'last-name',
    'annual-salary',
    'super-rate',
    'payment-start-date',
]

let TableRowIn = ({ index }) =>
    <tr>
        { columns.map( (name,i) => {
            return <TableCellIn 
                        key={i}
                        name={name}
                        row={index}
                        />
        })}
    </tr>

export default TableRowIn;