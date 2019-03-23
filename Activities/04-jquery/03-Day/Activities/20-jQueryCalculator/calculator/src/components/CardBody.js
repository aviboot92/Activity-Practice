import React, { Component } from 'react';
import Results from "./Results.js";

class CardBody extends Component {

    
    state = {
        operator:"",
        num1:"",
        num2:"",
        result:0,
        isOperatorChosen : false,
        isCalculated : false,
        temp:"0"
    }

    operationEqual = () =>{

    }

    btnClick =(event) =>{   
     console.log(event.target.attributes[2].value);
     if(this.state.isOperatorChosen === false){
         this.setState({
             num1 : this.state.num1 + event.target.attributes[2].value
         });
     } else {
        this.setState({
            num2 : this.state.num2 + event.target.attributes[2].value
        });
     }
    }

    oprClick =(event)=>{
        this.setState({
            operator : event.target.attributes[2].value,
            isOperatorChosen: true
        });

    }
    initializeCalculator =(event)=> {
        console.log(event);
       return this.setState({
            num1 : "",
            num2 : "",
            operator : "",
            isOperatorChosen : false,
            isCalculated : false
        });
      }
   
    render(){
    return (
            <div>
    <div className="card-body">
    <button onClick ={this.btnClick} id="button-1" className="btn btn-primary number" data-value="1">1</button>
    <button onClick ={this.btnClick} id="button-2" className="btn btn-primary number" data-value="2">2</button>
    <button onClick ={this.btnClick} id="button-3" className="btn btn-primary number" data-value="3">3</button>
    <button onClick ={this.oprClick} id="button-plus" className="btn btn-danger operator" data-value="plus">+</button>
    <br/><br/>
    <button onClick ={this.btnClick} id="button-4" className="btn btn-primary number" data-value="4">4</button>
    <button onClick ={this.btnClick} id="button-5" className="btn btn-primary number" data-value="5">5</button>
    <button onClick ={this.btnClick} id="button-6" className="btn btn-primary number" data-value="6">6</button>
    <button onClick ={this.oprClick} id="button-minus" className="btn btn-danger operator" data-value="minus">&minus;</button>
    <br/><br/>
    <button onClick ={this.btnClick} id="button-7" className="btn btn-primary number" data-value="7">7</button>
    <button onClick ={this.btnClick} id="button-8" className="btn btn-primary number" data-value="8">8</button>
    <button onClick ={this.btnClick} id="button-9" className="btn btn-primary number" data-value="9">9</button>
    <button onClick ={this.oprClick} id="button-multiply" className="btn btn-danger operator" data-value="times">&times;</button>
    <br/><br/>
    <button onClick ={this.btnClick} id="button-0" className="btn btn-primary number" data-value="0">0</button>
    <button onClick ={this.oprClick} id="button-divide" className="btn btn-danger operator" data-value="divide">&divide;</button>
    <button onClick ={this.oprClick} id="button-power" className="btn btn-danger operator" data-value="power">^</button>
    <button onClick ={this.operationEqual}  id="button-equal" className="btn btn-success equal" data-value="equals">=</button>
    <br/><br/>
    <button id="button-clear" onClick ={this.initializeCalculator} className="btn btn-dark clear" data-value="clear">clear</button>
  </div>
    <Results num1={this.state.num1} num2= {this.state.num2} result = {this.state.result} operator ={this.state.operator}/>
    </div>
 );
    }
}

export default CardBody;