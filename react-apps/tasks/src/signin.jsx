import React from 'react'
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state={ user :{ } }
    }
    login(){
       var userdata = JSON.parse(localStorage.getItem('user'));
        if(userdata.name=== this.state.user.name && userdata.pass===this.state.user.pass){
            alert("Login Succesfully")
        }
    }
    render() { 
        return ( <>
            Name: <input type="text" name='name' onChange={e=>this.setState({user:{...this.state.user,name:e.target.value}})}/>
            <br/>
            
            Password: <input type="password" name='pass' onChange={e => this.setState({ user: { ...this.state.user, pass: e.target.value } })}/>
            <br/>
            
            <input type="button" value="SignIn" onClick={this.login.bind(this)} />
            </> );
    }
}
 
export default Signin;