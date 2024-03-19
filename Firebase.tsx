// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    listAll,
} from "firebase/storage";


// Your web app's Firebase configuration
//const firebaseConfig = {
/*    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: 
};
*/

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const fbStorage = getStorage();

const listFiles = async () => {
    const storage = getStorage();
  
    // Create a reference under which you want to list
    const listRef = ref(storage, "images");
  
    // Find all the prefixes and items.
    const listResp = await listAll(listRef);
    return listResp.items;
  };
  
  /**
   *
   * @param {*} uri
   * @param {*} name
   */
  const uploadToFirebase = async (uri, name, onProgress) => {
    const fetchResponse = await fetch(uri);
    const theBlob = await fetchResponse.blob();
  
    const imageRef = ref(getStorage(), `images/${name}`);
  
    const uploadTask = uploadBytesResumable(imageRef, theBlob);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress && onProgress(progress);
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          reject(error);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({
            downloadUrl,
            metadata: uploadTask.snapshot.metadata,
          });
        }
      );
    });
};

export {uploadToFirebase, listFiles };