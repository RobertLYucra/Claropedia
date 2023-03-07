import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import {Loading} from '../components/subcomponents/Loading'

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <Loading>Loading</Loading>
    if (!user) return <Navigate to="/login" />
    
    return <> {children} </>
}