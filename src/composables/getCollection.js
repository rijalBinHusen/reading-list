import { db } from "../firebase/firebaseApp";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (c) => {
  const documents = ref(null);

  // collection ref
  let colRef = collection(db, c);

  const unsub = onSnapshot(colRef, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    // update value
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollection;
