
import './styles.css';

import React, {useState} from 'react';
/* import { Table } from 'react-bootstrap'; */
import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import db from '../../utils/firebaseUtils';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import FirebaseService from './../../services/FirebaseService';
import { getDatabase, ref, onValue} from "firebase/database";
import Loader from "react-js-loader";


export default function Ranking (){

    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getList();
    },[])
    

    const getList = async() => {
        setLoading(true);
        const dbs = getDatabase();
        const starCountRef = ref(dbs, 'ranking');
        let data = [];
        await onValue(starCountRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                data.push({
                    'nome':`${childSnapshot.key}`,
                    'pontos':`${childSnapshot.val()}`
                })
            });
            setValueList(data.sort((a,b) => b.pontos - a.pontos));
        });
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return(
        <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <div style={{marginBottom: "15px"}}>
                <h2>Ranking</h2>
            </div>
            {
                loading ?
                <Loader type="spinner-circle" bgColor={"#FFFFFF"} title={"Atualizando..."} color={'#FFFFFF'} size={100} />
                :
                <Table striped bordered hover style={{width: "50%"}}>
                    <thead>
                        <tr>
                            <th style={{color: "#fff"}}>#</th>
                            <th style={{color: "#fff"}}>Nome</th>
                            <th style={{color: "#fff"}}>Pontuaçao</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            valueList.map((item, index) => {
                                return(
                                    <tr>
                                    <td style={{color: "#fff"}}>{index+1}</td>
                                    <td style={{color: "#fff"}}>{item.nome}</td>
                                    <td style={{color: "#fff"}}>{item.pontos}</td>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </Table>
            }
            <Button variant="primary" onClick={() => getList()}>
                Atualizar
            </Button>
            <Button variant="Warning" onClick={() => getList()}>
                Game
            </Button>
        </div>
    )
}