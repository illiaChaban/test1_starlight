import React from 'react';

let TableCell = ({name, handleChange, value }) =>
    <td>
        <input
            name={name}
            onChange={handleChange}
            value={value}>
        </input>
    </td>

class TableRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            asalary: '',
            srate: '',
            paystart: '',
        }
    }
    
    render() {
        let { index } = this.props;
        let handleChange = (event) => {
            // console.log(event.target.value, event.target.name)
            this.setState({ [event.target.name]: event.target.value})
        }

        return (
                <tr>
                    { Object.keys(this.state).map( (name,i) => {
                        let value = this.state[name];
                        return <TableCell 
                                    key={i}
                                    name={name} 
                                    handleChange={handleChange}
                                    value={value}/>
                    })}
                </tr>
        )
    }


} 



class InputTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowNum: 2,
            data: [],
        }
    }

    render() {
        let { rowNum, data } = this.state;
        let { showCalculations, updateData } = this.props;
        let addRow = () => this.setState({ rowNum: rowNum + 1})

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>first-name</th>
                            <th>last-name</th>
                            <th>annual-salary</th>
                            <th>super-rate</th>
                            <th>payment-start-date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array(rowNum)
                                .fill()
                                .map( (x,i) => <TableRow 
                                                    key={i} 
                                                    index={i}
                                                    
                                                    />)
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
            </div>
        )
    }
}

export default InputTable;