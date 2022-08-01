import { getDatabase, onValue, push, ref , set } from "firebase/database";
import app from "./firebase"
import { useState,useEffect } from "react";
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

//? verileri çağırma;


export const useFetch = () => {
    
    const [isLoading, setIsLoading] = useState()
    const [contactList, setContactList] = useState()
    useEffect(() => {
        const db = getDatabase(app);
        const userRef = ref(db, "users")
        onValue(userRef , (snapshot) => {
            const data = snapshot.val()
            const userArray = []
            for (let id in data){
                userArray.push( {id , ...data[id] } )
            }
            setContactList(userArray)
            setIsLoading(false)
        })
    } , [])

    return  {contactList, isLoading}
}