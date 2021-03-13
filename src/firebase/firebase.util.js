import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config ={
    
        apiKey: "AIzaSyB47GUn8ie3049dHTGds3MTHNEE5U3hLzI",
        authDomain: "crwn-db-15abb.firebaseapp.com",
        projectId: "crwn-db-15abb",
        storageBucket: "crwn-db-15abb.appspot.com",
        messagingSenderId: "274879326888",
        appId: "1:274879326888:web:840b2ccba1fc53f19ff09d",
        measurementId: "G-8SE0RNV9QG"
      
};
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) 
    return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  console.log(snapShot);
  if(!snapShot.exists)
  {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
      }
      catch(error){
          console.log('Error Created User', error.message);
      }
  }
return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => 
auth.signInWithPopup(provider);

export default firebase;