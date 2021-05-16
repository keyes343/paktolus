import { Box, Button, Grid } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { sty } from './styles';
import * as c from '../CONTEXT';
import firebase from '../firebase';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const state = c.UseState()!;
    const dispatch = c.UseDispatch()!;

    const google = async () => {
        console.log('Signing in with google');
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        try {
        } catch (error) {
            console.log(error);
            alert('There was an error');
        }
        const result = await firebase.auth().signInWithPopup(provider);
        // const creds = result.credential?.toJSON();
        const user = result.user;

        user && dispatch({ type: c.act.user, payload: user });
    };
    const logout = async () => {
        try {
            await firebase.auth().signOut();
            // console.log(' await complete ');
            dispatch({ type: c.act.user });
        } catch (error) {
            alert('Not able to sign out');
        }
    };

    return (
        <Box>
            {state.user ? (
                <Grid container>
                    <Grid item container xs={4}>
                        Welcome {state.user.displayName}
                    </Grid>
                    <Grid item container xs={4} onClick={logout}>
                        <Button
                            style={{
                                ...sty.logButton,
                                border: '2px solid #f0410c',
                            }}
                        >
                            Logout
                        </Button>
                    </Grid>
                </Grid>
            ) : (
                <Button style={{ ...sty.logButton }} onClick={google}>
                    Login
                </Button>
            )}
        </Box>
    );
};

export default Login;
