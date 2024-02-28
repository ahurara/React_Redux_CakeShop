import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../redux";

function UserContainer({ userData, fetchUser }) {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]); // Add fetchUser as a dependency for useEffect

    return (
        <>
            {/* Check if userData is undefined before accessing its properties */}
            {userData && userData.loading ? (
                <h2>Loading...</h2>
            ) : userData && userData.error ? (
                <>
                 <h2>{userData.error}</h2>
                
               </>
            ) : (
                <>
                    <h2>User List</h2>
                    <div>
                        {/* Check if userData.users is not null or undefined */}
                        {userData && userData.users && userData.users.map(user => (
                            // Add a unique key for each user
                            <p key={user.id}>{user.name}</p>
                        
                        )
                        )
                       
                        }
                      
                    </div>
                </>
            )}
        </>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(actions.userActions.fetchUsers()) // Wrap dispatch in a function
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
