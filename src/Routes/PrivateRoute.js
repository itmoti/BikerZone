import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { UserContext } from '../Context/AuthContex';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(UserContext);
    if(loading) {
       <div>Loadin</div>
    }

    if(!user) {
        return  <Navigate to='/login' 
        
        // state={{from : location}} replace
         />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;