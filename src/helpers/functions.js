import { getDatabase, push, ref , set } from "firebase/database";
import app from "./firebase"
export const addBlog = (values) => {

    const db = getDatabase(app);
    const userRef = ref(db, "users")
    const newUserRef = push(userRef)
    set(newUserRef, {
        title : values.title,
        url : values.url,
        text : values.text
    })
}