import { getFirestore, collection, getDocs } from "firebase/firestore" ;
import { app } from "./config";

const db = getFirestore (app) ;



export const getProducts = async () => {
const querySnapshot = await getDocs(collection(db, "productos"));

querySnapshot.forEach((doc) => {
console.log(`${doc.id} => ${doc.data()}`);
})
}


export const getCategories = async () => {
const querySnapshot = await getDocs(collection(db, "categories"));

querySnapshot.forEach((doc) => {
console.log(`${doc.id} => ${doc.data()}`);
})
}