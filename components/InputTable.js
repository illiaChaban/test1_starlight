import React from 'react';

const rowNum = 2;
const columns = [
    'first-name',
    'last-name',
    'annual-salary',
    'super-rate',
    'payment-start-date',
]

let TableCell = ({name, handleChange, value }) =>
    <td style={{border: '1px solid black', padding: 0}}>
        <textarea
            style={{ padding: 0, width: '100%', height: '100%', borderStyle: 'none'}}
            name={name}
            onChange={handleChange}
            >
        </textarea>
    </td>


let TableRow = ({ index, handleChange }) =>
    <tr>
        { columns.map( (name,i) => {
            return <TableCell 
                        key={i}
                        name={name} 
                        handleChange={(e)=> handleChange(e, index)}
                        />
        })}
    </tr>


class InputTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowNum,
            data: Array(rowNum).fill().map( x => {}),
        }
    }

    render() {
        let { rowNum, data } = this.state;
        let { showCalculations, updateData } = this.props;
        let addRow = () => this.setState({ rowNum: rowNum + 1, })
        let handleChange = (event, index) => {
            let newData = [ ...this.state.data];
            if (!newData[index]) newData[index] = {}; 
            newData[index][event.target.name] = event.target.value;
            this.setState({ data: newData})
        }

        return (
            <div>
                <table style={{ borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            {columns.map( (name,i) => (
                                <th 
                                    key={i} 
                                    style={{border: '1px solid black'}}>
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        { Array(rowNum)
                                .fill()
                                .map( (x,i) => {
                                    return <TableRow 
                                                key={i} 
                                                index={i}
                                                handleChange={handleChange}
                                />})
                        }
                    </tbody>
                </table>
                <button onClick={addRow}>Add Row</button>
                <button
                    onClick={() => {
                        updateData(data);                        
                        showCalculations();
                    }}
                >Calculate</button>
                {/* <button onClick={() => console.log(this.state.data)}>Show</button> */}
            </div>
        )
    }
}

export default InputTable;