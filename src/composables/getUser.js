import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/firebaseApp";

// refs
const user = ref(auth.currentUser);

//auth changes
onAuthStateChanged(auth, (_user) => {
  console.log("state changed, curret user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
