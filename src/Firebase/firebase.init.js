import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
-----------------
Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method


----------------------

step-2:
1. Create Login Component
2. Create Register Component
3.Create Route for Login and Register

-----------------------

step-3
1.set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

-----------------------

step-4:
1. create a auth context 
2. create aontext provider
3. set context provider context value
4. use auth provider
5. create useAuth Hook


*/
