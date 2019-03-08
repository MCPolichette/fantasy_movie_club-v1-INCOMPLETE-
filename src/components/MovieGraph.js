import React from 'react'//
import { Chart } from 'react-charts';

// Test Data in objects for reference:
const movieObjects=[
    {
    id:"tt0437086",
    title: "Alita",
    boxOfficeGross: 74086002,
    releaseDate: "2/17/19",
    budget:170000000
    },{
    id:"tt3513498",
    title: "Lego Movie",
    boxOfficeGross: 92634619,
    releaseDate: "2/08/19",
    budget:100000000
    }
];

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
                { primary: true, type: 'ordinal', position: 'left' },
                { 
                    position: 'bottom', 
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
