import { firebaseInitialize } from "./firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";



firebaseInitialize();
export const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading,setisLoading]=useState(true);
    const auth = getAuth();
    let navigate = useNavigate();
    let location = useLocation();  
    let from = location.state?.from?.pathname || "/";

    const signInWithGoogle = () => {
        setisLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            }).finally(setisLoading(false));
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
            console.log(error.message);
          });
    }

    useEffect(() => {
        setisLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
                setisLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    return {
        signInWithGoogle,
        user,
        logOut,
        isLoading
    }

}