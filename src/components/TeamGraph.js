import React from 'react'//
import { Chart } from 'react-charts';
import test from './moviedata.json';

// Test Data in objects for reference:
const movieObjects=test.data
function console(){
    console.log(movieObjects)
}
const movieData = [
{
    label:"Alita",
    data:[["TEAM 65", 74086002],["TEAM 01",0],["Test",30]]
},{
    label:"Movie TWO",
    data:[["TEAM 01", 340000],["Test",30]]
},{
    label:"Movie THREE",
    data:[["TEAM 01", 31000],["Test",0]]
}

];


export default () => (

        <div
          style={{
            width: "400px",
            height: "300px"
          }}
        >
          <Chart     
            data={movieData}
            dark
            series={{type:'bar'}}
            axes={[
                { primary: true, type: 'ordinal', position: 'bottom' },
                { 
                    position: 'left', 
                type: 'linear', 
                stacked: true 
            },
            ]}
            primaryCursor
            secondaryCursor
            tooltip
          />
        </div>
      );
