import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state= {counter:0 }
    }
    increment(){
        if(this.state.counter>=10){
            this.setState({msg:"Sorry value greater than 10 is not allowed"})
        }
        else{
        this.setState({counter : this.state.counter+1, msg: ''});
        localStorage.setItem("counter", this.state.counter+1);
        }
    }
    decrement(){
       if(this.state.counter <=0){
            this.setState({msg:"Sorry value less than 0 is not allowed"})
        }
        else{
        this.setState({counter : this.state.counter-1, msg: ''});
        localStorage.setItem("counter", this.state.counter-1);
        }
    }
    render() { 
        return ( <>
        {this.state.counter}
        <input type='button' value='+' onClick={this.increment.bind(this)}/>
        <input type='button' value='-' onClick={this.decrement.bind(this)}/>
        <input type='button' value='Reset' onClick={()=>this.setState({counter:0}, localStorage.setItem("counter", 0))}/>
        {this.state.msg && (
            <span style={{ color: 'red' }}>{this.state.msg}</span>
        )}
        </> );
    }
}
 
export default Counter;