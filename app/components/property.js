"use client";
import { Divider } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { AddTextBox,AddCheckBox } from "../store";
import TextProperty from "./textProperty";
import CheckProperty from "./checkProperty";

function Property() {
    const TextBox = useRecoilValue(AddTextBox);
    const CheckBox = useRecoilValue(AddCheckBox);
    const mergeObjects = [...TextBox,...CheckBox];
    const typeSelected = mergeObjects.find(e=>e.focus===true)?.type;

    return ( <div>
        <h1 className='my-1 text-center cursor-pointer'>Property</h1>
        <Divider color="white" className="mt-1"/>
        <CheckProperty />
        {/* {typeSelected==='textbox' ? <TextProperty /> : typeSelected==='checkbox' ? <CheckProperty /> : <div style={{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",flexDirection:"column"}}><p>undifined</p><p>pls select some box</p></div>} */}
    </div> );
}

export default Property;