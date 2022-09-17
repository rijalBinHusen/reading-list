import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/firebaseApp";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }

    error.value = null;
    isPending.value = null;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, isPending, signup };
};

export default useSignup;
