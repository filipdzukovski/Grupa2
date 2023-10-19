import PropTypes from 'prop-types';
import {Navigate,Outlet} from 'react-router-dom';
// import {getToken} from './../config/StorageFunctions';
import {useSelector} from 'react-redux';

export const PrivateRoute = ({redirectPath="/login",children}) => {
    const token = useSelector(state=>state.authReducer.token)
    
    if(!token){
        return <Navigate to={redirectPath}/>
    }
    return children ? children : <Outlet/>
}

PrivateRoute.propTypes={
    redirectPath:PropTypes.string,
    children:PropTypes.element
}