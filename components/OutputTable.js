import React from 'react';

const columns = [
    'name',
    'pay-period',
    'gross-income',
    'income-tax',
    'net-income',
    'super-amount',
]

class OutputTable extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showTable: false
    //     }
    // }

    render() {
        let { data } = this.props;
        return (
            <div>
                <p>OutputTable</p>
                <table>
                    <thead>
                        <tr>
                            {columns.map( (name, i) => <th key={i}>{name}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OutputTable;