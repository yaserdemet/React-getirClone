import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./ToastNotify";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  // apiKey: "AIzaSyBfpWZ2uvQMW6PRBvR2O8k3GHYmoamvGKk",
  // authDomain: "amk2-d0f54.firebaseapp.com",
  // projectId: "amk2-d0f54",
  // storageBucket: "amk2-d0f54.appspot.com",
  // messagingSenderId: "644445422890",
  // appId: "1:644445422890:web:2c9cd0f7901911aa3e8a53",
  // measurementId: "G-D8ER1YQJ5V",
  apiKey: "AIzaSyBfpWZ2uvQMW6PRBvR2O8k3GHYmoamvGKk",
  authDomain: "amk2-d0f54.firebaseapp.com",
  databaseURL: "https://amk2-d0f54-default-rtdb.firebaseio.com",
  projectId: "amk2-d0f54",
  storageBucket: "amk2-d0f54.appspot.com",
  messagingSenderId: "644445422890",
  appId: "1:644445422890:web:2c9cd0f7901911aa3e8a53",
  measurementId: "G-D8ER1YQJ5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu registerdan parametre olarak geliyor.
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/about");
    // toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
  //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // navigate("/");
    toastSuccessNotify("Signed in successfully!");
    // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    console.log(err);
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    //! bu function başta false olarak tutulan currenUser ı gelen değere göre değiştirir.
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out11
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => sign-in-method => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
export const signUpProvider = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccessNotify("Logged out successfully!");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      // toastErrorNotify(err.message);
      // alert(err.message);
      // ..
      console.log("daw");
    });
};


//********************* DATABASE CONFIG ***************************/

