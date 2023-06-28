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

export default function Store({ children }) {
  return (
    <RecoilRoot>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        {children}
      </MantineProvider>
    </RecoilRoot>
  );
}

export { AddCheckBox, AddTextBox };
