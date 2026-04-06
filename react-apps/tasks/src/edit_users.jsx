import React from 'react'
class EDITUSER extends React.Component {
    constructor(props) {
        super(props);
        this.state={user:{  }}

    }    
    userdata = JSON.parse(localStorage.getItem('users')) || [];
    handleEdit(){}
    render() { 
        return ( <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {this.userdata.map((user, idx) => (
                        <tr key={idx}>
                            <td>
                                {user.name}
                                <button  onClick={() => this.handleEdit(idx)}>Edit</button>
                            </td>
                            <td>{user.pass}
                            <button  onClick={() => this.handleEdit(idx)}>Edit</button>
                            </td>
                            <td>{user.gender}

                                <button  onClick={() => this.handleEdit(idx)}>Edit</button>
                            </td>

                            <td>{Array.isArray(user.hobbies) ? user.hobbies.join(', ') : ''}
                                <button onClick={() => this.handleEdit(idx)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
       </> );
    }
}

export default EDITUSER ;


