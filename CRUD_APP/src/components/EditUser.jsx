import { useState, useEffect } from 'react';

import React from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../service/api';

const initialValue = {
    name: '',
    empid: '',
    desig: '',
    email: '',
    mobile: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, empid, desig, email, mobile } = user;
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        let response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        await editUser(id, user);
        navigate('/view');
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(e.target.value);
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name: </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">EmpId: </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='empid' value={user.empid} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Designation: </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='desig' value={user.desig} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email: </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Mobile: </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='mobile' value={user.mobile} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Update</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;