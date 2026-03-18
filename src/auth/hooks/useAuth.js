import { storeToRefs } from "pinia";
import { auth } from "../store/auth";

const useAuth = () => {

    const storeAuth = storeToRefs(auth());

    return {
        ...storeAuth,
        onLogin: auth().onLogin,
        checkAuth: auth().checkAuth,
        logout: auth().logout,
        onLoginWithGoogle: auth().onLoginWithGoogle,
        onLoginCallback: auth().onLoginCallback
    }

}

export default useAuth;