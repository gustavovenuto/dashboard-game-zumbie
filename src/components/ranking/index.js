
import './styles.css';

import React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FirebaseService from './../../services/FirebaseService';


export default function Ranking (){

    useEffect(() => {
        FirebaseService.getDataList('ranking', (dataReceived) =>  console.log(dataReceived))
    }) 

    return(
        <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <div style={{marginBottom: "15px"}}>
                <h2>Ranking</h2>
            </div>
            <ReactBootStrap.Table striped bordered hover style={{width: "50%"}}>
                <thead>
                    <tr>
                        <th style={{color: "#fff"}}>#</th>
                        <th style={{color: "#fff"}}>Nome</th>
                        <th style={{color: "#fff"}}>Pontuaçao</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    </tr>
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}