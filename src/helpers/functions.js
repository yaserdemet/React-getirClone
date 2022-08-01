import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import app from "./firebase";
import { useState, useEffect } from "react";
import { toastSuccessNotify } from "./ToastNotify";

export const addBlog = (values) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: values.title,
    url: values.url,
    text: values.text,
  });
};

//? verileri çağırma;

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);

  return { contactList, isLoading };
};



//* silme işlemi
export const deleteBlog = (id, navigate) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users");
  remove(ref(db, `users/${id}`));
  toastSuccessNotify("Your blog has been deleted");
  navigate("/about");
};
