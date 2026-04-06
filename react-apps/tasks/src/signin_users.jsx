import React from 'react'
class SIGNINUSER extends React.Component {
    constructor(props) {
        super(props);
        this.state={ user:{ }}
    }
   login(){
    const userdata = JSON.parse(localStorage.getItem('users')) || [];
    const { name, pass } = this.state.user;
    const found = userdata.find(u => u.name === name && u.pass === pass);
    if (found) {
        alert("Login Successfully");
    }
    else{
        alert("Invalid Username or Password")
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
export default SIGNINUSER;