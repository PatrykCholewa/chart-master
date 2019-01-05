import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';

class ExampleDataSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 2,
            y: 2,
            dataXY: [['4','3'],['2','1']],
            labelsX: ['LabelX1','labelX2'],
            labelsY: ['LabelY1','labelY2']
        }
    }

    addYClicked(){
        this.setState((state) => ({ y: (state.y + 1)}));
        this.setState((state) => ({ dataXY: state.dataXY.concat([new Array(this.state.x).fill('0'),])}));
        this.setState((state) => ({ labelsY: state.labelsY.concat('NewYLabel')}));
        console.log("klick_Y");
        console.log(this.state.y);
    }

    addXClicked(){
        this.setState((state) => ({ x: (state.x + 1)}));
        let arr = this.state.dataXY.forEach(row => row.push('0'));
        //this.setState((state) => ({ dataXY: arr}));
        this.setState((state) => ({ labelsX: state.labelsX.concat('NewXLabel')}));
        //this.setState((state) => ({ dataXY: state.dataXY.forEach(row => row.push('0'))}));
        console.log("klick_X");
        console.log(this.state.x);
    }

    generateGrid() {

        let grid = [ [{
            readOnly: true, component: (
                <button onClick={() => console.log(this.state)}>
                    Data Import/Export
                </button>
            ), forceComponent: true
        }].concat(this.state.labelsX.map(val => ({value: `${val}`})),[{readOnly: true, component: (<button onClick={() => this.addXClicked()}>+</button>), forceComponent: true}])]
        for (let i=0; i<this.state.y;i++) {
            grid.push([{value: this.state.labelsY[i]}].concat(this.state.dataXY[i].map(val => ({value: `${val}`}))));
        }
        grid.push([{  readOnly: true, component:(<button onClick={() => this.addYClicked()}>+</button>), forceComponent: true}]);
        return grid;
    }

    render() {
        return (
            <ReactDataSheet
                data={this.generateGrid()}
                valueRenderer={(cell) => cell.value}
                dataRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    const dataXY = this.state.dataXY.map(row => [...row]);
                    changes.forEach(({cell, row, col, value}) => {
                        if (row > 0 && col > 0) {
                            dataXY[row-1][col-1] =  value;
                        }
                        console.log(' '+ cell + ' '+ row +' '+ col +' '+ value);
                    });
                    this.setState(() => ({ dataXY: dataXY}))
                    console.log("Hello")
                }
                }
            />
        );
    }
}

export default ExampleDataSheet;
