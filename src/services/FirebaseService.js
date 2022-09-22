import db from '../utils/firebaseUtils';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export default class FirebaseService {
    static getDataList = (nodePath, callback) => {
        console.log('caiu aqui');
        console.log(nodePath)


        const citiesCol = collection(db, 'ranking');
        const citySnapshot = getDocs(citiesCol)
        console.log(citySnapshot);
       /*  let query = db.ref('ranking');

        console.log(query);


        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                console.log(item);
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        }); */

        return citiesCol;
    };

}