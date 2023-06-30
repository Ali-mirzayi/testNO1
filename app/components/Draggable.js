import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities";
import { ActionIcon, Switch  } from "@mantine/core";
import DisplayIcon from "./displayIcon";
import { MdOutlineDeleteForever } from "react-icons/md";

export function Draggable({c,i,handleChange,handleFocus,handleDeleteText}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: c.id });
  const style = {transform: CSS.Transform.toString(transform),transition};

  var itemType = null;

  return (
    <div style={style} ref={setNodeRef}>
    <div style={{width: "100%",margin: "0.5rem 0",display: "flex",alignItems: "center",zIndex:99999,justifyContent:"flex-end"}}>
    {c.type === "textbox"?
              <div style={{width:"90%",position:"relative"}}>
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
                >
                </DisplayIcon>
                      <div {...listeners}  {...attributes} style={{ width:"30px",height:"30px",padding: "0 0.6rem",border:"1px solid black",position:"absolute",left:"-25px",top:"3px",zIndex:"1.8rem" }}>{c.uuid}</div>
           </div>
           :
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
              <div {...listeners}  {...attributes} style={{ width:"30px",height:"30px",padding: "0 0.6rem",border:"1px solid black",marginRight:"10px",zIndex:"1.8rem" }}>{c.uuid}</div>
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
                </div>
            }
        </div>
    </div>
  );
}



// <div style={style} ref={setNodeRef}>
// <div style={{width: "100%",margin: "0.5rem 0",display: "flex",alignItems: "center",zIndex:99999}}>
// <div {...listeners}  {...attributes} style={{ padding: "0 0.6rem",border:"1px solid black" }}>{c.uuid}</div>
// <DisplayIcon
//   onChange={(e) => handleChange(e.target.value, i,itemType="value")}
//   className={c.className}
//   value={c.value}
//   id={c.id}
//   required={c.required}
//   disabled={c.disabled}
//   onClick={() => handleFocus(i)}
//   styles={{ input:c.focus ? { outline: "2.5px solid #1971c2 !important",backgroundColor:c.color } : { outlineWidth: "0",backgroundColor:c.color }}}
//   rightSection={
//     <ActionIcon onClick={() => handleDeleteText(i)}>
//       <MdOutlineDeleteForever color="red" style={{height:"2rem",width:"1.3rem"}} />
//     </ActionIcon>}/>
//     </div>
// </div>