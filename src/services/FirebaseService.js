import db from '../utils/firebaseUtils';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue} from "firebase/database";

export default class FirebaseService {
    static getDataList = (nodePath, callback) => {
        const dbs = getDatabase();
        const starCountRef = ref(dbs, 'ranking');
        let data = [];
        onValue(starCountRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            data.push({
                'nome':`${childSnapshot.key}`,
                'pontos':`${childSnapshot.val()}`
            })
        });
         console.log(data)
        });
        return data;
    };

}