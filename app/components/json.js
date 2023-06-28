"use client"
import { Divider } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { AddTextBox,AddCheckBox } from "../store";
import { JsonView, darkStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function Json() {
    const TextBox= useRecoilValue(AddCheckBox);
    // const TextBox= useRecoilState(AddTextBox);
    const selectedTextBox = TextBox.filter((c)=>c.focus===true)[0];
    const fallbackJson = selectedTextBox===undefined ? {id: '0',uuid: 'undefined',name: '',className: '',value: '',label: '',disabled: false,required: false,focus: false} : selectedTextBox;

    return ( <div style={{height:"35%",borderTop:"2px solid white"}}>
        <h1 className="my-1 text-center">JSON</h1>
        <Divider color="white" />
        <JsonView data={fallbackJson} shouldInitiallyExpand={(level) => true} style={darkStyles} />
    </div> );
}

export default Json;