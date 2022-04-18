import { db } from "./IndexFirebase";
import { collection , getDocs } from "firebase/firestore";

const todosCollectionRef=collection(db, "todos");
const projectCollectionRef=collection(db, "project");
