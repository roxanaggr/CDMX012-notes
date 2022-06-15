import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot, updateDoc, getDoc, setDoc} from "firebase/firestore";
import { app } from "./firebase";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default db

export const collectionRef = collection(db, 'notes');

export {
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  collection,
  updateDoc,
  getDoc,
  setDoc
}