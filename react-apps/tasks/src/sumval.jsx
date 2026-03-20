import React from 'react'
class sumval extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    sum(){
        if(this.state.txt1==='' ||this.state.txt2==='' ){
            this.setState({msg:"Input fields are empty"})
            return;
        }
        if(isNaN(this.state.txt1) ||isNaN(this.state.txt2) ){
            this.setState({msg:"Input fields should be Numbers"})
            return;
        }
        if(this.state.txt1<0 ||this.state.txt2<0 ){
            this.setState({msg:"Input fields are less than 0"})
            return;
        }
        var c = parseInt(this.state.txt1) + parseInt(this.state.txt2);

        this.setState({msg:"Sum is " + c});
    }
    render() { 
        return (<>
            No1: <input type="text" name='txt1' onChange={e=>this.setState({txt1:e.target.value})}/>
            No2: <input type="text" name='txt2' onChange={e=>this.setState({txt2:e.target.value})}/>
            <input type="button" value="sum" onClick={this.sum.bind(this)} />
            {this.state.msg}
        </>  );
    }
}
 
export default sumval;