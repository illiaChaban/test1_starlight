import React from 'react';

const columns = [
    'first-name',
    'last-name',
    'annual-salary',
    'super-rate',
    'payment-start-date',
]

let TableCell = ({name, handleChange, value }) =>
    <td>
        <input
            name={name}
            onChange={handleChange}
            >
        </input>
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
// class TableRow extends React.Component{
//     render() {
//         let { index, handleChange } = this.props;
//         return (
//                 <tr>
//                     { columns.map( (name,i) => {
//                         return <TableCell 
//                                     key={i}
//                                     name={name} 
//                                     handleChange={(e)=> handleChange(e, index)}
//                                     />
//                     })}
//                 </tr>
//         )
//     }
// } 

const rowNum = 2;

class InputTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowNum,
            data: Array(rowNum).fill({}),
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
                <table>
                    <thead>
                        <tr>
                            {columns.map( (name,i) => <th key={i}>{name}</th>)}
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