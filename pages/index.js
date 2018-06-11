import InputTable from '../components/InputTable';
import OutputTable from '../components/OutputTable';
import React from 'react';

const DataContext = React.createContext({
    data: [],
})


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showTable: false
        }
    }

    render() {
        let { data, showTable } = this.state;
        let showCalculations = () => this.setState({ showTable: true});
        let updateData = (data) => this.setState({data})

        return (
            <div>
                <p>Hello</p>
                <p style={{ fontWeight: 'bold'}}>Input</p>
                <InputTable 
                    showCalculations={showCalculations}
                    updateData={updateData}/>
                <p style={{ fontWeight: 'bold'}}>Output</p>        
                {showTable && <OutputTable/>}
                {/* <button onClick={()=> console.log(this.state.data)}>ShowDAta</button> */}
            </div>
        )
    }
}


export default App;