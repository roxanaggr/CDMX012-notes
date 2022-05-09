import { getFirestore, addDoc, collection } from "firebase/firestore";
import { auth } from "./firebase";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const newNote = async (title) => {
    await addDoc(collection(db, 'notes'), {
      text: title,
      datecreate: Timestamp.now(),
      email: auth.currentUser.email,
      notes: [],
    })
  }