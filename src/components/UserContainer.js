import React, { useEffect } from 'react'
import axios from "axios"
import { connect } from 'react-redux'
import { fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure } from '../redux/actions/users/UserAction'

function UserContainer({userData}) {
  console.log('from userData',userData)

    useEffect(()=>{
      const fetchUsers = () => {
        return (dispatch) => {
            dispatch(fetchUsersRequest)
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    const users = response.data;
                    dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchUsersFailure(errorMsg))
                })
        }
    
    }
     fetchUsers();
    },[])

  return userData.loading ?(
    <h2>Loading</h2>
  ) : userData.error ?(
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <h2>User List</h2>
        <div>
            {
                userData && userData.users && userData.users.map(user=> <p>{user.name}</p>)
            }
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchUser: number => dispatch()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer) 
