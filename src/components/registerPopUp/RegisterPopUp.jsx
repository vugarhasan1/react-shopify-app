import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography, Tab, Tabs } from '@mui/material'
import Login from '../login/Login';
import Register from '../register/Register';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1, m: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const RegisterPopUp = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '96%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} component="span">
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1} component="span">
                <Register />
            </TabPanel>
        </Box>
    );
}
export default RegisterPopUp
