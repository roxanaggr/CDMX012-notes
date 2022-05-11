import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default db

export {
  collection,
  addDoc
}

/*export const newNote = async (title) => {
    await addDoc(collection(db, 'notes'), {
      text: title,
      datecreate: Timestamp.now(),
      email: auth.currentUser.email,
      notes: [],
    })
  }*/