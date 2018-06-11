let TableCellIn = ({name, handleChange, value }) =>
    <td style={{border: '1px solid black', padding: 0}}>
        <textarea
            style={{ padding: 0, width: '100%', height: '100%', borderStyle: 'none'}}
            name={name}
            onChange={handleChange}
            >
        </textarea>
    </td>

export default TableCellIn;
