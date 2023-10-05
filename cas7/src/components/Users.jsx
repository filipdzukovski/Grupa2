import PropTypes from 'prop-types';

export const Users = ({usersList}) =>{
    console.log(usersList)
    return(
        <div id="users">
          {usersList.length > 0 ?
          <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map(user=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    )
                })}
            </tbody>
          </table> : <p>Loading...</p> }
        </div>
    )
}

Users.propTypes={
    usersList:PropTypes.arrayOf(PropTypes.object)
}