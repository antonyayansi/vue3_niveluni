import useAuth from "../auth/hooks/useAuth";

const isAuth = async (to, from, next) => {
    
    const {
        checkAuth,
    } = useAuth();
    
    const ok = await checkAuth();

    if(ok) next();
    else next('/login');
}

export default isAuth;