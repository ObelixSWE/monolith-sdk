/*
*  Name :   HelloBubbleConfig.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {class HelloBubbleConfig}
*/

import React, { Component } from 'react';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit';
import VerticalLayout from '../../ui/Layouts/VerticalLayout';
import AbsBubbleConfig from '../../../lib/uiConstruction/AbsBubbleConfig';


export default class HelloBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            value:""
        };
        this.getValue=this.getValue.bind(this);
        this.send=this.send.bind(this);
    }
    getValue(val){
        this.setState({value:val});
    }

    send(){
        let insProm = HelloDb.insert({},'BubbleHelloInsert',this.state.value);
        insProm.then(
            (result) => {this.props.closeMenu();},
            (error) => {console.log(error);}
        );
    }

    render(){
        return(
            <VerticalLayout>
                <LineEdit
                    id="helloLineEdit"
                    classes=""
                    updateState={this.getValue}
                    value=""
                />
                <PushButton buttonName='Send' handleClick={this.send}/>
            </VerticalLayout>);
    }

}

/*
how to use:
<RandBubbleConfig send={this.'function name'}/>
*/