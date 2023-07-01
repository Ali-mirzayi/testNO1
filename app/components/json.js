"use client"
import { Divider } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { AddTextBox,AddCheckBox } from "../store";
import { JsonView, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function Json() {
    const CheckBox= useRecoilValue(AddCheckBox);
    const TextBox= useRecoilValue(AddTextBox);
    const mergeObjects = [...TextBox,...CheckBox];

    console.log(mergeObjects);

    //for selected items
    // const typeSelected = mergeObjects.find(e=>e.focus===true)?.type;
    const fallbackJson = [{id: '0',uuid: 'undefined',name: '',className: '',value: '',label: '',disabled: false,required: false,focus: false}];
    // data={typeSelected==='textbox' ? TextBox.filter((c)=>c.focus===true)[0] : typeSelected==='checkbox' ? CheckBox.filter((c)=>c.focus===true)[0] : fallbackJson}
    return ( <div>
        <h1 style={{backgroundColor:"#606461",color:"white",textAlign:"center"}}>JSON</h1>
        <JsonView data={!!mergeObjects[0] ? mergeObjects : fallbackJson} shouldInitiallyExpand={(level) => true} style={defaultStyles} />
    </div> );
}

export default Json;