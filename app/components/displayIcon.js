import React from "react";
import { TextInput,ActionIcon  } from "@mantine/core";
import {MdOutlineDeleteForever} from 'react-icons/md';

export default function DisplayIcon(props) {
  return (
      <TextInput
        {...props}
        sx={{ width: "90%", margin: "auto", marginRight: "1rem" }}
        placeholder="value"
      />
  );
}
