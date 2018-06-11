import React from 'react';
import TableRowIn, {columns} from './TableRowIn'

const rowNum = 2;

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
                                    return <TableRowIn 
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