"use client"
import { Divider } from '@mantine/core';
import { useSetRecoilState } from 'recoil';
import { AddTextBox,AddCheckBox } from '../store';
import { useState } from 'react';

function Toolbar() {
    const [id,setId] = useState(1);
    const [uuid,setuuId] = useState(0);
    
    const initialTextBox = {
        uuid,
        type: 'textbox',
        id: id.toString(),
        name: '',
        className: '',
        value: '',
        label: '',
        color: "#25262b",
        disabled: false,
        required: false,
        focus: false
    }

    const initialCheckBox = {
        uuid,
        type: 'checkbox',
        id: id.toString(),
        labelPosition: 'right',
        label: '',
        description: '',
        checked: false,
        color: "#0c8599",
        disabled: false,
        radius: 'md',
        size: 'md',
        focus: false
    };

    const addTextBox = useSetRecoilState(AddTextBox);
    const addCheckBox = useSetRecoilState(AddCheckBox);

    const AddBox = () => {
        addTextBox(rest=>[...rest,initialTextBox]);
        setId(e=>e+=1);
        setuuId(e=>e+=1);
    };

    const AddCheck = () => {
        addCheckBox(rest=>[...rest,initialCheckBox]);
        setId(e=>e+=1);
        setuuId(e=>e+=1);
    };


    function Enable(){
        addTextBox(rest=>rest.map((e)=>{
                if(e.disabled===true){
                    return {...e,disabled:false}
                }else{
                    return e
                }}))
        addCheckBox(rest=>rest.map((e)=>{
                if(e.disabled===true){
                    return {...e,disabled:false}
                }else{
                    return e
                }}))
    };

    return ( <section>
        <h1 className='my-1 text-center cursor-pointer'>Toolbar</h1>
        <Divider color="white" />
        <div className='my-5 text-center'>
           <div className='btntools' onClick={AddBox}>Text Box</div>
        </div>
        <div className='my-5 text-center'>
           <div className='btntools' onClick={AddCheck}>Check Box</div>
        </div>
        <div className='my-5 text-center'>
           <div className='btntools' onClick={Enable} style={{backgroundColor:"#00485c !important"}}>Enable All</div>
        </div>
    </section> );
}

export default Toolbar;