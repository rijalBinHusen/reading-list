import { db } from "../firebase/firebaseApp";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (c, _query) => {
  const documents = ref(null);

  // collection ref
  let colRef = collection(db, c);

  if (_query) {
    colRef = query(colRef, where(..._query));
  }

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
