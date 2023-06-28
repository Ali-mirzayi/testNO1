"use client";
import { Divider } from "@mantine/core";
import { useRecoilState, useRecoilValue } from "recoil";
import { AddTextBox,AddCheckBox } from "../store";
import { useState,useEffect } from "react";
import TextProperty from "./textProperty";

function Property() {
    const TextBox = useRecoilValue(AddTextBox);
    const CheckBox = useRecoilValue(AddCheckBox);
    console.log(TextBox);
    console.log(CheckBox);
    
    return ( <div>
        <h1 className='my-1 text-center cursor-pointer'>Property</h1>
        <Divider color="white" className="mt-1"/>
        <TextProperty />
    </div> );
}

export default Property;