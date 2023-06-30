"use client"
import { TextInput,Switch, ColorPicker } from '@mantine/core'
import { useRecoilState, useSetRecoilState } from "recoil";
import { AddTextBox,PropertyCount,DeleteText } from "../store";
import { useState,useEffect } from "react";

export default function TextProperty() {
    const [TextBox, setTextBox] = useRecoilState(AddTextBox);
    const setCount = useSetRecoilState(PropertyCount);
    const DelCount = useSetRecoilState(DeleteText);
    const selectedTextBox = TextBox.filter((c)=>c.focus===true)[0];
    const [getter, setter] = useState(selectedTextBox);
    
    var target = null;

    function mutaded(e,c) {
        setter({
            ...selectedTextBox,
            [c]: e
        })
    };
    
    useEffect(()=>{
        const finalValue = TextBox.map((c)=>{
            if (c.uuid===getter.uuid){
                return getter;
            }else{
                return c;
            }
        });
        setTextBox([...finalValue]);
        setCount(r=>r=r+1);
    },[getter]);

    function Delete(){
        const finalValue = TextBox.filter(e=>{
            return e.uuid!==selectedTextBox.uuid
        });
        setTextBox(finalValue);
        DelCount(r=>r=r+1);
    };

  return (
    <div>
         <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>ID</p></div>
                <TextInput radius="xs" onChange={(e)=>mutaded(e.target.value,target='id')} value={selectedTextBox?.id} style={{width:"100%"}} />
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Name</p></div>
                <TextInput radius="xs" onChange={(e)=>mutaded(e.target.value,target='name')} value={selectedTextBox?.name} style={{width:"100%"}} />
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Class</p></div>
                <TextInput radius="xs" onChange={(e)=>mutaded(e.target.value,target='className')} value={selectedTextBox?.className} style={{width:"100%"}} />
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Required</p></div>
                <div style={{width:"100%"}}>
                    <Switch onChange={(e)=>mutaded(e.currentTarget.checked,target='required')} checked={selectedTextBox?.required} size="lg" radius="md" color="red" onLabel="ON" offLabel="OFF" style={{margin:"0 0.5rem"}} />
                </div>
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Value</p></div>
                <TextInput radius="xs" onChange={(e)=>mutaded(e.target.value,target='value')} value={selectedTextBox?.value} style={{width:"100%"}}/>
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Label</p></div>
                <TextInput radius="xs" onChange={(e)=>mutaded(e.target.value,target='label')} value={selectedTextBox?.label} style={{width:"100%"}} />
            </div>
            <div className="propertyContainer">
                <div className="propertyKey"><p style={{paddingLeft:"0.3rem"}}>Disable</p></div>
                <div style={{width:"100%"}}>
                   <Switch onChange={(e)=>mutaded(e.currentTarget.checked,target='disabled')} checked={selectedTextBox?.disabled} size="lg" radius="md" color="red" onLabel="ON" offLabel="OFF" style={{margin:"0 0.5rem"}} />
                </div>
            </div>
            <div className="propertyContainer" style={{borderBottomWidth:0,borderLeftWidth:0,paddingTop:"10px"}}>
        <div className="propertyKey" style={{borderRightWidth:0}}>
          <p style={{ paddingLeft: "0.3rem" }}>Color</p>
        </div>
        <div style={{ width: "100%" }}>
          <ColorPicker onChangeEnd={(val) => mutaded(val, (target = "color"))} size="sm" style={{ width: "100%" }} />
        </div>
      </div>
        <div onClick={Delete} style={{cursor:"pointer",backgroundColor:"red",width:"90%",height:"50px",margin:"10px auto",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{textAlign:"center",fontWeight:500,fontSize:"1.3rem",color:"white"}}>DELETE ITEM</p>
        </div>
    </div>
  )
}