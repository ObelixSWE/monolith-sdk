/*
*  Name :   Bubble.jsx 
*  Location : /imports/UI/Bubbles
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: {Versione del file}
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import {VerticalLayout} from "../../Layouts/VerticalLayout";
import {PushButton} from "../../SingleComponents/PushButton/PushButton";

export class RandBubble extends React.Component {
    constructor(props){
        super(props);
        this.calcolate=this.calcolate.bind(this);
        this.state={
            n:''
        }


    }

    calcolate(){
        this.state.n=(int)(Math.random()*this.props.nMax);
        this.props.send(this.state.n);
    }

    render(){
        return(
            <VerticalLayout>
                <h1>Rolled number: {this.state.n}</h1>
                <PushButton buttonName="Re-roll" handleClick={this.calcolate}/>
            </VerticalLayout>
        );
    }
}
