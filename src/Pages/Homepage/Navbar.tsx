import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Login from './Login';
import { sty } from './styles';
import * as c from '../CONTEXT';
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const state = c.UseState()!;
    const dispatch = c.UseDispatch()!;

    const getBalance = () => {
        const balance = localStorage.getItem('balance');
        if (balance) {
            const balance_num = parseFloat(balance);
            return balance_num;
        } else return state.balance;
    };

    return (
        <Box style={{ ...sty.navBar }}>
            <Grid container style={{ ...sty.navGrid }}>
                <Grid xs={4} item container style={{ ...sty.navGridItem }}>
                    <Box
                        style={{
                            ...sty.numHolder,
                            fontSize: '2rem',
                            opacity: '0.3',
                        }}
                    >
                        Company Logo
                    </Box>
                </Grid>
                <Grid xs={4} item container style={{ ...sty.navGridItem }}>
                    <Box
                        style={{
                            ...sty.numHolder,
                            fontSize: '1.6rem',
                            opacity: '0.6',
                        }}
                    >
                        My current balance = $ {getBalance()}
                    </Box>
                </Grid>
                <Grid xs={4} item container style={{ ...sty.navGridItem }}>
                    <Login />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Navbar;
