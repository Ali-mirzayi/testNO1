import {TextInput,Switch,SegmentedControl  ,ColorPicker} from "@mantine/core";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AddCheckBox, PropertyCheck, DeleteCheck } from "../store";
import { useState, useEffect } from "react";

export default function CheckProperty() {
  const [CheckBox, setCheckBox] = useRecoilState(AddCheckBox);
  const selectedCheckBox = CheckBox.filter((c) => c.focus === true)[0];
  const [getter, setter] = useState(selectedCheckBox);
  const setCount = useSetRecoilState(PropertyCheck);
  const DelCount = useSetRecoilState(DeleteCheck);
  var target = null;

  const data=[
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];


  function mutaded(e, c) {
    setter({
      ...selectedCheckBox,
      [c]: e,
    });
  }

  useEffect(() => {
    const finalValue = CheckBox.map((c) => {
      if (c.uuid === getter.uuid) {
        return getter;
      } else {
        return c;
      }
    });
    setCheckBox(finalValue);
    setCount(r=>r=r+1);
  }, [getter]);

  function Delete(){
    const finalValue = CheckBox.filter(e=>{
        return e.uuid!==selectedCheckBox.uuid
    });
    setCheckBox(finalValue);
    DelCount(r=>r=r+1);
};

  return (
    <div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>ID</p>
        </div>
        <TextInput radius="xs" onChange={(e) => mutaded(e.target.value, (target = "id"))} value={selectedCheckBox?.id} style={{ width: "100%" }} />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Label</p>
        </div>
        <TextInput radius="xs" onChange={(e) => mutaded(e.target.value, (target = "label"))} value={selectedCheckBox?.label} style={{ width: "100%" }} />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Descrip</p>
        </div>
        <TextInput radius="xs" onChange={(e) => mutaded(e.target.value, (target = "description"))} style={{ width: "100%" }} />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>CHECK</p>
        </div>
        <div style={{ width: "100%" }}>
          <Switch onChange={(e) => mutaded(e.currentTarget.checked, (target = "checked")) } checked={selectedCheckBox?.checked} size="lg" radius="md" color="red" onLabel="ON" offLabel="OFF" style={{ margin: "0 0.5rem" }}/>
        </div>
      </div>
      <div className="propertyContainer">
        <div className="propertyKey" style={{borderRightWidth:0}}>
          <p style={{ paddingLeft: "0.3rem" }}>Color</p>
        </div>
        <div style={{ width: "100%" }}>
          <ColorPicker onChangeEnd={(val) => mutaded(val, (target = "color"))} size="sm" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Disable</p>
        </div>
        <div style={{ width: "100%" }}>
          <Switch
            onChange={(e) =>
              mutaded(e.currentTarget.checked, (target = "disabled"))
            }
            checked={selectedCheckBox?.disabled}
            size="lg"
            radius="md"
            color="red"
            onLabel="ON"
            offLabel="OFF"
            style={{ margin: "0 0.5rem" }}
          />
        </div>
      </div>
      <div className="propertyContainer">
        <div className="propertyKey" style={{borderRightWidth:0}}>
          <p style={{ paddingLeft: "0.3rem" }}>Radius</p>
        </div>
        <div style={{ width: "100%" }}>
          <SegmentedControl data={data} onChange={value=>mutaded(value,target='radius')} style={{width:"100%"}} />
        </div>
      </div>
      <div className="propertyContainer" style={{borderBottomWidth:"2px"}}>
        <div className="propertyKey" style={{borderRightWidth:0}}>
          <p style={{ paddingLeft: "0.3rem" }}>Size</p>
        </div>
        <div style={{ width: "100%" }}>
          <SegmentedControl data={data} onChange={value=>mutaded(value,target='size')} style={{width:"100%"}} />
        </div>
      </div>
      <div onClick={Delete} style={{cursor:"pointer",backgroundColor:"red",width:"90%",height:"50px",margin:"10px auto",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{textAlign:"center",fontWeight:500,fontSize:"1.3rem",color:"white"}}>DELETE ITEM</p>
        </div>
    </div>
  );
}
