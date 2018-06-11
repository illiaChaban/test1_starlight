import DataContext from './DataContext';

let TableCellIn = ({name, row }) =>
    <td style={{border: '1px solid black', padding: 0}}>
        <DataContext.Consumer>
            { ({handleChange}) => (
                <textarea
                    style={{ padding: 0, width: '100%', height: '100%', borderStyle: 'none'}}
                    name={name}
                    onChange={(e) => handleChange(e, row)}
                    >
                </textarea>
            )}
        </DataContext.Consumer>
    </td>

export default TableCellIn;
