import PropTypes from 'prop-types';
import {Navigate,Outlet} from 'react-router-dom';
import {getToken} from './../config/StorageFunctions';

export const PrivateRoute = ({redirectPath="/login",children}) => {
    // console.log("PRivate")
    // console.log(getToken())
    if(!getToken()){
        return <Navigate to={redirectPath}/>
    }
    return children ? children : <Outlet/>
}

PrivateRoute.propTypes={
    redirectPath:PropTypes.string,
    children:PropTypes.element
}