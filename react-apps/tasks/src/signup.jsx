import React from 'react'
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state= { user:{} }
    }
    submit_profile(){
        if (!this.state.user.name || this.state.user.name.trim() === '') {
            alert("Username is empty");
            return;
        }
        if (!this.state.user.pass || this.state.user.pass.trim() === '') {
            alert("Password is empty");
            return;
        }
        if (!this.state.user.gender) {
            alert("Gender is not selected");
            return;
        }
        if (!this.state.user.hobbies || this.state.user.hobbies.length === 0) {
            alert("Please select at least one hobby");
            return;
        }
        localStorage.setItem("user", JSON.stringify(this.state.user));
        alert("User Registered Successfully");
    }
    render() { 
        return ( <>
            Name:<input type="text" name='name' onChange={e=>{this.setState({user:{...this.state.user,name:e.target.value}})}} />
            <br/>
            password:<input type='password' name='pass' onChange={e=>{this.setState({user:{...this.state.user,pass:e.target.value}})}} />
            <br/>
            
            Gender:<input type='radio' name='gender' value='male' onChange={e => this.setState({ user: { ...this.state.user, gender: e.target.value } })} /> Male
            <input type='radio' name='gender' value='female' onChange={e => this.setState({ user: { ...this.state.user, gender: e.target.value } })} /> Female
            <br/>
            Hobbies:
            <input type='checkbox' name='hobbies' value='reading' onChange={e => {
                const hobbies = this.state.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({ user: { ...this.state.user, hobbies: [...hobbies, e.target.value] } });
                } else {
                    this.setState({ user: { ...this.state.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) } });
                }
            }} /> Reading
            <input type='checkbox' name='hobbies' value='sports' onChange={e => {
                const hobbies = this.state.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({ user: { ...this.state.user, hobbies: [...hobbies, e.target.value] } });
                } else {
                    this.setState({ user: { ...this.state.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) } });
                }
            }} /> Sports
            <input type='checkbox' name='hobbies' value='music' onChange={e => {
                const hobbies = this.state.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({ user: { ...this.state.user, hobbies: [...hobbies, e.target.value] } });
                } else {
                    this.setState({ user: { ...this.state.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) } });
                }
            }} /> Music
            <br/>
            
            <input type="button" value="Register" onClick={this.submit_profile.bind(this)} />
        </> );
    }
}
 
export default signup;