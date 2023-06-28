import {
  TextInput,
  Switch,
  Slider,
  ColorPicker,
  HueSlider,
} from "@mantine/core";
import { useRecoilState } from "recoil";
import { AddCheckBox } from "../store";
import { useState, useEffect } from "react";

const MARKS = [
  { value: 0, label: "xs" },
  { value: 25, label: "sm" },
  { value: 50, label: "md" },
  { value: 75, label: "lg" },
  { value: 100, label: "xl" },
];

export default function CheckProperty() {
  const [CheckBox, setCheckBox] = useRecoilState(AddCheckBox);
  const selectedCheckBox = CheckBox.filter((c) => c.focus === true)[0];
  const [getter, setter] = useState(selectedCheckBox);
  var target = null;

  function mutaded(e, c) {
    console.log({ [c]: e });
    setter({
      ...selectedCheckBox,
      [c]: e,
    });
    console.log(getter);
  }

  // console.log(MARKS.find((e)=>e.value===50).label);

  // function xxx (e) {
  //   console.log(MARKS.find((ree)=>ree.value===e).label);
  //   setter({
  //     ...selectedCheckBox,
  //     size: MARKS.find((ree)=>ree.value===e).label
  // });
  // console.log(getter);
  // }

  useEffect(() => {
    const finalValue = CheckBox.map((c) => {
      if (c.uuid === getter.uuid) {
        return getter;
      } else {
        return c;
      }
    });
    setCheckBox(finalValue);
  }, [getter]);

  return (
    <div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>ID</p>
        </div>
        <TextInput
          onChange={(e) => mutaded(e.target.value, (target = "id"))}
          value={selectedCheckBox?.id}
          style={{ width: "100%" }}
        />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Label</p>
        </div>
        <TextInput
          onChange={(e) => mutaded(e.target.value, (target = "label"))}
          value={selectedCheckBox?.label}
          style={{ width: "100%" }}
        />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Descrip</p>
        </div>
        <TextInput
          onChange={(e) => mutaded(e.target.value, (target = "description"))}
          value={selectedCheckBox?.description}
          style={{ width: "100%" }}
        />
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>CHECK</p>
        </div>
        <div style={{ width: "100%" }}>
          <Switch
            onChange={(e) =>
              mutaded(e.currentTarget.checked, (target = "checked"))
            }
            checked={selectedCheckBox?.checked}
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
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Color</p>
        </div>
        <div style={{ width: "100%" }}>
          <ColorPicker
            onChangeEnd={(val) => mutaded(val, (target = "color"))}
            size="sm"
            style={{ width: "100%" }}
          />
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
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Radius</p>
        </div>
        <div style={{ width: "100%" }}>
          <Slider
            onChangeEnd={(val) =>
              mutaded(
                MARKS.find((mark) => mark.value === val).label,
                (target = "radius")
              )
            }
            label={(val) => MARKS.find((mark) => mark.value === val).label}
            defaultValue={50}
            step={25}
            marks={MARKS}
            styles={{ markLabel: { display: "none" } }}
            style={{ margin: "auto", width: "85%" }}
          />
        </div>
      </div>
      <div className="propertyContainer">
        <div className="propertyKey">
          <p style={{ paddingLeft: "0.3rem" }}>Size</p>
        </div>
        <div style={{ width: "100%" }}>
          <Slider
            // onChangeEnd={(val)=>xxx(val)}
            onChangeEnd={(val) =>
              mutaded(
                MARKS.find((mark) => mark.value === val).label,
                (target = "size")
              )
            }
            label={(val) => MARKS.find((mark) => mark.value === val).label}
            defaultValue={50}
            step={25}
            marks={MARKS}
            styles={{ markLabel: { display: "none" } }}
            style={{ margin: "auto", width: "85%" }}
          />
        </div>
      </div>
    </div>
  );
}
