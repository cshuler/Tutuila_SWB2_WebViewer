import React, { Component } from 'react'
import {DATA as runoff} from '../data/Raster_files_Base_scenario/runoff_annual'

export class PieChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false
        }
        this.sumFunction = this.sumFunction.bind(this)
    }
    sumFunction(){
        //import
        var runOffData = runoff
        //confirmed string***

        //checking if there is a line break
            //breaking long string into one characters
            var runOffArrayDoubleSpace = runOffData.split("")
            
            //every character if a line break is replaced with a space
            var arrayThing = []
            console.log(runOffArrayDoubleSpace[0])
            for(var i =0; i<runOffArrayDoubleSpace.length; i++) {
                if(runOffArrayDoubleSpace[i]!=="\n"){
                    arrayThing.push(runOffArrayDoubleSpace[i])
                } else {
                    arrayThing.push(" ")
                }
            }
            
            //Making one giant string
            var joinString = arrayThing.join("")
            
            //create arrays that removed double spaces
            var mainArray = joinString.split(" ")
            //issue***** still has a single space before every 700 multiple

            //empty array
            var trueArray = []
            //pushing into array
            for(var j=0; j<mainArray.length; j++){
                
                if(mainArray[j].length !== 0){
                    trueArray.push(Number(mainArray[j]))
                } 
            }

            for(var m = 0; m < trueArray.length; m++){
                if(typeof trueArray[m] !== "number"){
                    console.log('not a string', m)
                }
            }

            console.log('trueArray', trueArray.length)
            // 280,004
            //there are 5 extra cells, i'm not sure why
            console.log('trueArray', trueArray)

            //sum
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            console.log('theFinal', trueArray.reduce(reducer))

            var testArray = [1,2]
            console.log('testArray', testArray.reduce(reducer))

    }
    render() {
        // this.sumFunction()
        return (
            <div>
                <h1>pie chart</h1>
            </div>
        )
    }
}

export default PieChart
