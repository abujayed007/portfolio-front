import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const MyRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h2 className="flex items-center mx-auto text-4xl gap-5">Loading <span className="loading loading-bars loading-lg "></span></h2>
        
    }
    if (user?.email === 'abujayed007@gmail.com') {
        return children
    }
    return  <Navigate to='/' state={{ from: location }} replace />

};

export default MyRoutes;