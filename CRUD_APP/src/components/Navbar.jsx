import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, styled } from '@mui/material';

import EditUser from './EditUser';

import { NavLink } from 'react-router-dom';

const Headbar = styled(AppBar)`
     background: #1d8259;
`
const Tabs = styled(NavLink)`
     font-size: 20px;
     margin-right: 20px;
     padding: 5px 5px;
     color: inherit;
     text-decoration: none;
`

const Navbar = () => {
    return(
        <Headbar position='static'>
            <Toolbar>
                <Tabs to="./" exact>CRUD Application</Tabs>
                <Tabs to="view" exact>View User</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
               
            </Toolbar>

        </Headbar>
    )
}

export default Navbar;