import { getFirestore, addDoc } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const publishPost = async () => {
    await addDoc(collection(db, ''), {
      text: posting,
      datecreate: Timestamp.now(),
      email: auth.currentUser.email,
      //notes: [],
    })
  } 
