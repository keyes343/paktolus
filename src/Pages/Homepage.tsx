import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import GameModal from './Homepage/GameModal';
import Table from './Homepage/Table';
import { sty } from './styles';
import * as c from './CONTEXT';

export interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
    const state = c.UseState()!;
    const dispatch = c.UseDispatch()!;
    const [showModal, setShowModal] = useState(false);

    return (
        <Box
            style={{
                minHeight: '100vh',
                border: '3px solid red',
                padding: '0 0 10rem',
            }}
        >
            {/* render popup */}
            {showModal ? (
                <GameModal
                    x={{
                        showModal,
                        setShowModal,
                    }}
                />
            ) : null}

            <Box style={{ ...sty.navBar }}>This is nav area</Box>
            <Box style={{ ...sty.middleArea }}>
                <Grid container direction="row" justify="space-around">
                    <Grid item>
                        <Button
                            style={{ ...sty.button }}
                            onClick={() => {
                                setShowModal(!showModal);
                            }}
                        >
                            Play
                        </Button>
                    </Grid>

                    <Grid
                        container
                        item
                        direction="column"
                        justify="center"
                        style={{ width: 'auto' }}
                    >
                        My Current Balance = $ {state.balance}
                    </Grid>
                </Grid>
                <Table />
            </Box>
            <Box style={{ ...sty.footer }}>Footer area</Box>
        </Box>
    );
};

export default Homepage;
