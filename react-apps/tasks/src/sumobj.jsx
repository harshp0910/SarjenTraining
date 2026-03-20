import React from 'react'
class sumobj extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  arr:{} }
    }

    sumobj(){
        if(this.state.arr.txt1==='' ||this.state.arr.txt2==='' ){
            this.setState({msg:"Input fields are empty"})
            return;
        }
        if(isNaN(this.state.arr.txt1) ||isNaN(this.state.arr.txt2) ){
            this.setState({msg:"Input fields should be Numbers"})
            return;
        }
        if(this.state.arr.txt1<0 ||this.state.arr.txt2<0 ){
            this.setState({msg:"Input fields are less than 0"})
            return;
        }
        var sum = parseInt(this.state.arr.txt1)+parseInt(this.state.arr.txt2);
        this.setState({msg:"Sum is " + sum});
    }
    render() { 
        return ( <>
            OBJ_No1: <input type="text" name='txt1' onChange={e=>this.setState({arr: {...this.state.arr, txt1:e.target.value}})}/>
            OBJ_No2: <input type="text" name='txt2' onChange={e=>this.setState({arr: {...this.state.arr, txt2:e.target.value}})}/>
            <input type="button" value="sum" onClick={this.sumobj.bind(this)} />
            {this.state.msg}
            </> );
    }
}

export default sumobj;