import React from 'react'
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state={user:{ }}

    }
    userdata = JSON.parse(localStorage.getItem('user'));
    editname(){
        this.userdata.name = this.state.user.name;
        localStorage.setItem('user',JSON.stringify(this.userdata))
        alert("Username Changed Successfully")
    }
    editpass(){
        this.userdata.pass = this.state.user.pass;
        localStorage.setItem('user',JSON.stringify(this.userdata))
        alert("Password Changed Successfully")
    }
    editgender(){
        this.userdata.gender = this.state.user.gender;
        localStorage.setItem('user',JSON.stringify(this.userdata))
        alert("Gender Changed Successfully")
    }
    edithobby(){
        this.userdata.hobbies = this.state.user.hobbies;
        localStorage.setItem('user',JSON.stringify(this.userdata))
        alert("Hobbies Changed Successfully")
    }
    render() { 
        return ( <>
            Name:<input type="text" name='name' onChange={e=>{this.setState({user:{...this.state.user,name:e.target.value}})}} />
            <input type="button" value="Edit" onClick={this.editname.bind(this)} />
            <br/>
            
            password:<input type='password' name='pass' onChange={e=>{this.setState({user:{...this.state.user,pass:e.target.value}})}} />
            <input type="button" value="Edit" onClick={this.editgender.bind(this)} />
            <br/>
            
            Gender:<input type='radio' name='gender' value='male' onChange={e => this.setState({ user: { ...this.state.user, gender: e.target.value } })} /> Male
            <input type='radio' name='gender' value='female' onChange={e => this.setState({ user: { ...this.state.user, gender: e.target.value } })} /> Female
            <input type="button" value="Edit" onClick={this.editgender.bind(this)} />
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
            <input type="button" value="Edit" onClick={this.edithobby.bind(this)} />
        </> );
    }
}
 
export default Edit;