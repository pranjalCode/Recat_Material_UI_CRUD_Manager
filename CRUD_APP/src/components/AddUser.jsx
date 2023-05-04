import React, {useState} from "react";
import  {FormGroup, FormControl, Input, InputLabel, Typography, Button, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";

import api, { addUser } from '../service/api';

const Container = styled(FormGroup)`
     width: 50%;
     margin: 2% auto 0 auto;
     & > div {
        margin-top: 20px;
        padding: 5px;
     }
`
const initialValue = {
    name: '',
    empid: '',
    desig: '',
    email: '',
    mobile: '',
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, empid, desig, email, mobile } = user;
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = async () =>{
           await addUser(user);
           navigate('/view');
    }

    return (
        <Container>
            <Typography variant='h3'>AddUser</Typography>
            <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>EmpID:</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="empid" />
            </FormControl>
            <FormControl>
                <InputLabel>Designation:</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="desig" />
            </FormControl>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Mobile:</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="mobile" />
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => addUserDetails()}>Add</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;