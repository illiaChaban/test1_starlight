import React from 'react';
import DataContext from './DataContext';

const defaultRowNum = 2;

class AppProvider extends React.Component {
    state = {
        showTable: false,
        rowNum: defaultRowNum,
        data: Array(defaultRowNum).fill().map( x => {}),        
        addRow: () => this.setState({ rowNum: this.state.rowNum + 1}),
        showCalculations: () => this.setState({ showTable: true }),
        handleChange: (event, index) => {
            let newData = [...this.state.data];
            if (!newData[index]) newData[index] = {};
            newData[index][event.target.name] = event.target.value;
            this.setState({ data: newData })
        }
    }
    
    render() {
        return (
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


export default AppProvider;