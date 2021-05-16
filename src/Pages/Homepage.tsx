import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import GameModal from './Homepage/GameModal';
import Table from './Homepage/Table';
import Navbar from './Homepage/Navbar';
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

            <Navbar />
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
                </Grid>
                <Table />
            </Box>
            <Box style={{ ...sty.footer }}>
                <span style={{ fontSize: 'inherit' }}>&#169;</span>
                Copyright
            </Box>
        </Box>
    );
};

export default Homepage;
