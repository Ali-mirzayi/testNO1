"use client";
import { RefObject, useEffect, useRef } from "react";
import { RecoilRoot, atom } from "recoil";
import { MantineProvider } from "@mantine/core";

const AddTextBox = atom({
  key: "AddTextBox",
  default: [],
});

const AddCheckBox = atom({
  key: "AddCheckBox",
  default: [],
});

const PropertyCount = atom({
  key: "PropertyCount",
  default: 0,
});

const PropertyCheck = atom({
  key: "PropertyCheck",
  default: 0,
});

const DeleteCheck = atom({
  key: "DeleteCheck",
  default: 0,
});

const DeleteText = atom({
  key: "DeleteText",
  default: 0,
});

export default function Store({ children }) {
  return (
    <RecoilRoot>
      <MantineProvider theme={{ colorScheme: "light" }}>
        {children}
      </MantineProvider>
    </RecoilRoot>
  );
}

export { AddCheckBox, AddTextBox, PropertyCount, PropertyCheck, DeleteCheck, DeleteText };
