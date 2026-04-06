import React from 'react'
class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0 };
    }
    counter(){
        var flag = false;
        for( var i=0;i<10;i++){
            if(flag){
                break;
            }
            setInterval(()=> {this.setState({count:this.state.count++})},1000)    
        }
    }
    
    render() { 
        return ( <>
            <p>{this.state.count}</p>
            <input type="button" value="Start" onClick={this.counter.bind(this)}/>
        </> );
    }
}
export default Countdown;