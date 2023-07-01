"use client";
import { useRecoilValue } from "recoil";
import { AddTextBox,AddCheckBox, PropertyCount } from "../store";
import TextProperty from "./textProperty";
import CheckProperty from "./checkProperty";

function Property() {
    const TextBox = useRecoilValue(AddTextBox);
    const CheckBox = useRecoilValue(AddCheckBox);
    const mergeObjects = [...TextBox,...CheckBox];
    const typeSelected = mergeObjects.find(e=>e.focus===true)?.type;

    return ( <div style={{width:"100%"}}>
        <h1 style={{backgroundColor:"#606461",color:"white",textAlign:"center"}}>Property</h1>
        {typeSelected==='textbox' ? <TextProperty /> : typeSelected==='checkbox' ? <CheckProperty /> : <div style={{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.2rem",flexDirection:"column"}}><p>undifined</p><p>pls select some box</p></div>}
    </div> );
}

export default Property;