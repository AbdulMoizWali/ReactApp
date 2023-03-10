import app from "./FirebaseConfigure"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

let userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

let userLogin = () => {

}

let getFBData = () => {

}

let postFBData = () => {

}

let editFBData = () => {

}

let deleteFBData = () => {

}

export {
    userSignUp,
    userLogin
}