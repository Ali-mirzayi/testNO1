"use client";
import { Divider, ActionIcon , Switch  } from "@mantine/core";
import { useRecoilState } from "recoil";
import { AddTextBox, AddCheckBox } from "../store";
import DisplayIcon from "./displayIcon";
import { MdOutlineDeleteForever } from "react-icons/md";

function Designer() {
  const [TextBox, setTextBox] = useRecoilState(AddTextBox);
  const [CheckBox, setCheckBox] = useRecoilState(AddCheckBox);

  const handleChangeText = (e, i) => {
    const finalValue = TextBox.map((c, index) => {
      if (index === i) {
        return { ...c, value: e };
      } else {
        return c;
      }
    });
    setTextBox(finalValue);
  };

  const handleChangeCheck = (e, i) => {
    const finalValue = CheckBox.map((c, index) => {
      if (index === i) {
        console.log(c);
        return { ...c, checked: e };
      } else {
        return c;
      }
    });
    setCheckBox(finalValue);
  };

  const handleFocusInText = (i) => {
    const finalValue = TextBox.map((c, index) => {
      if (index === i) {
        return { ...c, focus: true };
      } else {
        return { ...c, focus: false };;
      }
    });
    setTextBox(finalValue);
  };

  const handleFocusInCheck = (i) => {
    const finalValue = CheckBox.map((c, index) => {
      if (index === i) {
        return { ...c, focus: true };
      } else {
        return { ...c, focus: false };;
      }
    });
    setCheckBox(finalValue);
  };

  const handleDeleteText = (i) => {
    setTextBox((rest) => rest.filter((c, index) => index !== i));
  };

  return (
    <div style={{ height: "65%" }}>
      <h1 className="my-1 text-center cursor-pointer">Designer</h1>
      <Divider color="white"/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        {TextBox.map((x, i) => (
          <div
            key={i}
            style={{
              width: "50%",
              margin: "0.5rem 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "0 0.6rem" }}>{x.label}</div>
            <DisplayIcon
              onChange={(e) => handleChangeText(e.target.value, i)}
              className={x.className}
              value={x.value}
              id={x.id}
              required={x.required}
              disabled={x.disabled}
              onFocus={() => handleFocusInText(i)}
              styles={{ input:x.focus ? { outline: "1px solid #1971c2 !important" } : { outlineWidth: "0" }}}
              rightSection={
                <ActionIcon onClick={() => handleDeleteText(i)}>
                  <MdOutlineDeleteForever color="red" />
                </ActionIcon>
              }
            />
          </div>
        ))}
        {CheckBox.map((x, i) => (
          <div
            key={i}
            style={{
              width: "50%",
              margin: "0.5rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <div style={{ padding: "0 0.6rem" }}>{x.label}</div>
            <Switch
              onChange={(e) => handleChangeCheck(e.currentTarget.checked, i)}
              color={x.color}
              id={x.id}
              labelPosition= {x.labelPosition}
              label= {x.label}
              description= {x.description}
              checked = {x.checked}
              disabled= {x.disabled}
              radius= {x.radius}
              size= {x.size}
              onFocus={() => handleFocusInCheck(i)}
              styles={{track:x.focus ? {border:"0.2rem solid #1971c2 !important"} : {outlineWidth:0}}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designer;
