import React from 'react';
import TableRowIn, { columns } from './TableRowIn';
import DataContext from './DataContext';



let InputTable = () =>
  <DataContext.Consumer>
    {({addRow, showCalculations, rowNum}) => (
        <div>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {columns.map((name, i) => (
                  <th
                    key={i}
                    style={{ border: '1px solid black' }}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array(rowNum)
                .fill()
                .map((x, i) => {
                  return <TableRowIn
                    key={i}
                    index={i}
                  />
                })
              }
            </tbody>
          </table>

              <div>
                <button onClick={addRow}>Add Row</button>
                <button
                  onClick={() => {
                    // updateData(data);
                    showCalculations();
                  }}
                >Calculate</button>
              </div>
          {/* <button onClick={() => console.log(this.state.data)}>Show</button> */}
        </div>
      )}
  </DataContext.Consumer>

export default InputTable;