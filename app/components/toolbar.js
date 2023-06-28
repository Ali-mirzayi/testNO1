"use client"
import { Divider } from '@mantine/core';
import { useSetRecoilState } from 'recoil';
import { AddTextBox,AddCheckBox } from '../store';
import { useState } from 'react';

function Toolbar() {
    const [id,setId] = useState(1);
    const [uuid,setuuId] = useState(0);
    
    const initialTextBox = {
        id: id.toString(),
        uuid,
        name: '',
        className: '',
        value: '',
        label: '',
        disabled: false,
        required: false,
        focus: false
    }

    const initialCheckBox = {
        id: id.toString(),
        uuid,
        labelPosition: 'right',
        label: '',
        description: '',
        checked: false,
        color: 'grape',
        disabled: false,
        radius: 'md',
        size: 'lg',
        focus: false
    };

    const addTextBox = useSetRecoilState(AddTextBox);
    const AddBox = () => {
        addTextBox(rest=>[...rest,initialTextBox]);
        setId(e=>e+=1);
        setuuId(e=>e+=1);
    };

    const addCheckBox = useSetRecoilState(AddCheckBox);
    const AddCheck = () => {
        addCheckBox(rest=>[...rest,initialCheckBox]);
        setId(e=>e+=1);
        setuuId(e=>e+=1);
    };

    return ( <section>
        <h1 className='my-1 text-center cursor-pointer'>Toolbar</h1>
        <Divider color="white" />
        <div className='my-7 text-center'>
           <div style={{cursor:"pointer"}} onClick={AddBox}>Text Box</div>
        </div>
        <Divider color="white" />
        <div className='my-7 text-center'>
           <div style={{cursor:"pointer"}} onClick={AddCheck}>Check Box</div>
        </div>
    </section> );
}

export default Toolbar;