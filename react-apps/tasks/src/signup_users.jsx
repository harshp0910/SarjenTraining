import React from 'react'
class SIGNUPUSERS extends React.Component {
    constructor(props) {
        super(props);
        this.state={ users:{user:{}} }
    }
    submit_profile(){
        if (!this.state.users.user.name || this.state.users.user.name.trim() === '') {
            alert("Username is empty");
            return;
        }
        if (!this.state.users.user.pass || this.state.users.user.pass.trim() === '') {
            alert("Password is empty");
            return;
        }
        if (!this.state.users.user.gender) {
            alert("Gender is not selected");
            return;
        }
        if (!this.state.users.user.hobbies || this.state.users.user.hobbies.length === 0) {
            alert("Please select at least one hobby");
            return;
        }
        const users_new = JSON.parse(localStorage.getItem("users")) || [];
        const user_new = this.state.users.user;
        users_new.push(user_new)
        localStorage.setItem("users", JSON.stringify(users_new));
        alert("User Registered Successfully");
    }
    render() { 
        return ( <>
            Name:<input type="text" name='name' onChange={e=>{this.setState({users:{user:{...this.state.users.user,name:e.target.value}}})}} />
            <br/>
            password:<input type='password' name='pass' onChange={e=>{this.setState({users:{user:{...this.state.users.user,pass:e.target.value}}})}} />
            <br/>
            
            Gender:<input type='radio' name='gender' value='male' onChange={e=>{this.setState({users:{user:{...this.state.users.user,gender:e.target.value}}})}} /> Male
            <input type='radio' name='gender' value='female' onChange={e=>{this.setState({users:{user:{...this.state.users.user,gender:e.target.value}}})}} /> Female
            <br/>
            Hobbies:
            <input type='checkbox' name='hobbies' value='reading' onChange={e => {
                const hobbies = this.state.users.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: [...hobbies, e.target.value] }} });
                } else {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) } }});
                }
            }} /> Reading
            <input type='checkbox' name='hobbies' value='sports' onChange={e => {
                const hobbies = this.state.users.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: [...hobbies, e.target.value] }}});
                } else {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) }}});
                }
            }} /> Sports
            <input type='checkbox' name='hobbies' value='music' onChange={e => {
                const hobbies = this.state.users.user.hobbies || [];
                if (e.target.checked) {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: [...hobbies, e.target.value] }} });
                } else {
                    this.setState({users:{ user: { ...this.state.users.user, hobbies: hobbies.filter(hobby => hobby !== e.target.value) } }});
                }
            }} /> Music
            <br/>
            
            <input type="button" value="Register" onClick={this.submit_profile.bind(this)} />
        </> );
}
}
export default SIGNUPUSERS;