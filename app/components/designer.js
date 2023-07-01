"use client";
import { useRecoilState,useRecoilValue } from "recoil";
import { AddTextBox, AddCheckBox,PropertyCount, PropertyCheck,DeleteCheck,DeleteText } from "../store";
import {DndContext,closestCenter} from '@dnd-kit/core';
import {SortableContext,rectSortingStrategy,arrayMove} from "@dnd-kit/sortable";
import { Draggable } from "./Draggable";
import { useEffect,useState } from "react";

function Designer() {
  const [TextBox, setTextBox] = useRecoilState(AddTextBox);
  const [CheckBox, setCheckBox] = useRecoilState(AddCheckBox);
  const TextCount = useRecoilValue(PropertyCount);
  const CheckCount = useRecoilValue(PropertyCheck);
  const DelText = useRecoilValue(DeleteText);
  const DelCheck = useRecoilValue(DeleteCheck);
  let [mergeObjects, setMergeObjects] = useState([]);

  useEffect(() => {
      setMergeObjects(rest=>rest.map((e, i) => {
        const uid = TextBox.map((e) => e.uuid);
        const uid2 = mergeObjects.map((e) => e.uuid);
        if (uid.some((uidVal) => uidVal === uid2[i])) {
          return TextBox.find((bb) => bb.uuid === uid2[i]);
        } else {
          return e;
        }
      }))
  }, [TextCount]);
  
  useEffect(() => {
      setMergeObjects(rest=>rest.map((e, i) => {
        const uid = CheckBox.map((e) => e.uuid);
        const uid2 = mergeObjects.map((e) => e.uuid);
        if (uid.some((uidVal) => uidVal === uid2[i])) {
          return CheckBox.find((cc) => cc.uuid === uid2[i]);
        } else {
          return e;
        }
      }))
  }, [CheckCount]);

  const handleFocus = (i) => {
    setMergeObjects(rest=>rest.map((c, index) => {
      return index === i ? { ...c, focus: true } : { ...c, focus: false };
    }));
  };

  const handleDeleteText = (i) => {
    setMergeObjects((rest) => rest.filter((c, index) => index !== i));
  };

  const handleChange = (e, i, target) => {
    setMergeObjects(rest=>rest.map((c, index) => {
      if (index === i) {
        return { ...c, [target]: e };
      } else {
        return c;
      }
    }));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!active.id !== over.id) {
      const oldIndex = mergeObjects.findIndex((c) => c.id === active.id);
      const newIndex = mergeObjects.findIndex((c) => c.id === over.id);
      setMergeObjects(arrayMove(mergeObjects, oldIndex, newIndex));
    }
  };

  useEffect(() => {
    // for add textbox and push to merge
    if([...TextBox,...CheckBox].length>mergeObjects.length){
    setMergeObjects(prevMergeObjects => [...prevMergeObjects, TextBox[TextBox.length - 1]]);
    setMergeObjects(prev => prev.filter(e=>e!==undefined));
  }else{
    return;
    }
  }, [TextBox.length]);
  
  useEffect(() => {
    // for add CheckBox and push to merge
    if([...TextBox,...CheckBox].length>mergeObjects.length){
      setMergeObjects(prevMergeObjects => [...prevMergeObjects, CheckBox[CheckBox.length - 1]]);
      setMergeObjects(prev => prev.filter(e=>e!==undefined));
    }else{
      return;
    }
  }, [CheckBox.length]);

  useEffect(()=>{
    // const uid = CheckBox.map(e => e.uuid);
    // const fff = mergeObjects.filter(e => uid.includes(e.uuid) || e.type === "textbox");
    setMergeObjects(res=>res.filter(e => CheckBox.map(e => e.uuid).includes(e.uuid) || e.type === "textbox"));
  },[DelCheck]);

  useEffect(()=>{
    setMergeObjects(res=>res.filter(e => TextBox.map(e => e.uuid).includes(e.uuid) || e.type === "checkbox"));
  },[DelText]);
  console.log(DelText);

  useEffect(() => {
        setCheckBox(mergeObjects.filter(e => e.type === 'checkbox'));
        setTextBox(mergeObjects.filter(e => e.type === 'textbox'));
  }, [mergeObjects]);

  return (
    <div className="designer">
      <h1 style={{backgroundColor:"#606461",color:"white",textAlign:"center"}}>Designer</h1>
      <div style={{display: "flex", flexWrap: "wrap",flexDirection: "row-reverse"}}>
        {mergeObjects !== [] ? 
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <ul style={{display: "flex", flexWrap: "wrap",flexDirection: "row-reverse",width:"100%"}}>
               <SortableContext items={mergeObjects} strategy={rectSortingStrategy}>
                 {mergeObjects?.map((c,i)=>(
                  <li key={i} className="list">
                    <Draggable c={c} i={i} handleChange={handleChange} handleFocus={handleFocus} handleDeleteText={handleDeleteText} />
                       </li>
                    ))}
                </SortableContext>
              </ul>
            </DndContext>
         :<div style={{width:"200px",height:"200px",backgroundColor:"blue"}}/>}
      </div>
    </div>
  );
}

export default Designer;