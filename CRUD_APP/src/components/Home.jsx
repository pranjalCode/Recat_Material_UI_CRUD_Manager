import React from "react";

import { Box, Typography, styled } from '@mui/material';

import crud_home from '../Assest/Images/crud_home.jpeg';


const Header = styled(Box)`
    // margin: 50px;
    // & > div {
    //     margin-top: 50px;
    // }
`;

const styles = {
    root: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      },
      image: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      },
}

const Home = () => {
    return (
        <Header>
            {/* <Typography variant="h4">CRUD Application</Typography> */}
            <Box style={styles.root}>
                <img src={crud_home}  style={styles.image}/>
                
            </Box>
        </Header>
    )
}

export default Home;