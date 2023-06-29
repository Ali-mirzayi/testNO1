"use client";
import { Divider, ActionIcon , Switch  } from "@mantine/core";
import { useRecoilState } from "recoil";
import { AddTextBox, AddCheckBox } from "../store";
import DisplayIcon from "./displayIcon";
import { MdOutlineDeleteForever } from "react-icons/md";

function Designer() {
  const [TextBox, setTextBox] = useRecoilState(AddTextBox);
  const [CheckBox, setCheckBox] = useRecoilState(AddCheckBox);
  let mergeObjects = [...TextBox,...CheckBox];

  var itemType = null;

  const handleChange = (e, i, target) => {
    const finalValue = mergeObjects.map((c, index) => {
      if (index === i) {
        return { ...c, [target]: e };
      } else {
        return c;
      }
    });
      setTextBox(finalValue.filter(e => e.type === 'textbox'));
      setCheckBox(finalValue.filter(e => e.type === 'checkbox'));
      mergeObjects = finalValue;
  };

  const handleFocus = (i) => {
    const finalValue = mergeObjects.map((c, index) => {
      if (index === i) {
        return { ...c, focus: true };
      } else {
        return { ...c, focus: false };
      }
    });
      setTextBox(finalValue.filter(e => e.type === 'textbox'));
      setCheckBox(finalValue.filter(e => e.type === 'checkbox'));
      mergeObjects = finalValue;
  };
 
  const handleDeleteText = (i) => {
    setTextBox((rest) => rest.filter((c, index) => index !== i));
  };

  return (
    <div style={{ height: "65%" }}>
      <h1 style={{backgroundColor:"#606461",color:"white",textAlign:"center"}}>Designer</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        {mergeObjects.sort((a,b) => a.uuid - b.uuid).map((c,i)=>(
          <div key={i} style={{width: "50%",margin: "0.5rem 0",display: "flex",alignItems: "center"}}> 
            {c.type === "textbox"?
              <div style={{width:"100%"}}>
                <div style={{ padding: "0 0.6rem" }}>{c.label}</div>
                <DisplayIcon
                  onChange={(e) => handleChange(e.target.value, i,itemType="value")}
                  className={c.className}
                  value={c.value}
                  id={c.id}
                  required={c.required}
                  disabled={c.disabled}
                  onClick={() => handleFocus(i)}
                  styles={{ input:c.focus ? { outline: "2.5px solid #1971c2 !important",backgroundColor:c.color } : { outlineWidth: "0",backgroundColor:c.color }}}
                  rightSection={
                    <ActionIcon onClick={() => handleDeleteText(i)}>
                      <MdOutlineDeleteForever color="red" style={{height:"2rem",width:"1.3rem"}} />
                    </ActionIcon>
                  }
                />
           </div>
           :
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Switch
                    onChange={(e) => handleChange(e.currentTarget.checked, i, itemType="checked")}
                    id={c.id}
                    labelPosition= {c.labelPosition}
                    label= {c.label}
                    description= {c.description}
                    checked = {c.checked}
                    disabled= {c.disabled}
                    radius= {c.radius}
                    size= {c.size}
                    onClick={() => handleFocus(i)}
                    styles={{track:c.focus ? {border:"0.23rem solid #1971c2 !important",backgroundColor:`${c.checked ? c.color : "#606461"} !important`}:{outlineWidth:0,backgroundColor:`${c.checked ? c.color : "#606461"} !important`}}}
                  />
                </div>}
               </div>
            ))}
      </div>
    </div>
  );
}

export default Designer;
