import InputTable from '../components/InputTable';
import OutputTable from '../components/OutputTable';
import React from 'react';
import AppProvider from '../components/AppProvider'
import DataContext from '../components/DataContext';



let App = () =>
    <AppProvider>
        <div>
            <p style={{ fontWeight: 'bold'}}>Input</p>
            <InputTable />
            <p style={{ fontWeight: 'bold'}}>Output</p>  
            <DataContext.Consumer>    
                {({showTable, data}) => showTable && <OutputTable data={data}/>}
            </DataContext.Consumer>
        </div>
    </AppProvider>


export default App;