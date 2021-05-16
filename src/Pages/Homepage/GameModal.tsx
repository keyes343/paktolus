import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, CircularProgress, Grid } from '@material-ui/core';
import { sty } from './styles';
import * as c from '../CONTEXT';

export interface GameModalProps {
    x: {
        showModal: boolean;
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GameModal: React.FC<GameModalProps> = ({ x }) => {
    const [spin1, setSpin1] = useState(false);
    const [spin2, setSpin2] = useState(false);
    const [spin3, setSpin3] = useState(false);

    const state = c.UseState()!;
    const dispatch = c.UseDispatch()!;

    useEffect(() => {
        let loop1: NodeJS.Timeout;
        if (spin1) {
            loop1 = setTimeout(() => {
                setSpin1(false);
            }, 1000);
        }

        return () => {
            clearTimeout(loop1);
        };
    }, [spin1]);
    useEffect(() => {
        let loop2: NodeJS.Timeout;
        if (spin2) {
            loop2 = setTimeout(() => {
                setSpin2(false);
            }, 1500);
        }

        return () => {
            clearTimeout(loop2);
        };
    }, [spin2]);
    useEffect(() => {
        let loop3: NodeJS.Timeout;
        if (spin3) {
            loop3 = setTimeout(() => {
                setSpin3(false);
            }, 2000);
        }

        return () => {
            clearTimeout(loop3);
        };
    }, [spin3]);

    const [num1, setNum1] = useState<number | null>(null);
    const [num2, setNum2] = useState<number | null>(null);
    const [num3, setNum3] = useState<number | null>(null);

    return (
        <Box style={{ ...sty.mainWrapper }}>
            <div style={{ height: '5rem' }} />
            {/* SPINNERS */}
            <Grid
                style={{ ...sty.spinnerGrid }}
                direction="row"
                justify="space-between"
                container
            >
                <Grid item style={{ ...sty.spinnerChild }} xs={3}>
                    <Box style={{ ...sty.numHolder }}>
                        {spin1 ? <CircularProgress /> : num1}
                    </Box>
                </Grid>
                <Grid item style={{ ...sty.spinnerChild }} xs={3}>
                    <Box style={{ ...sty.numHolder }}>
                        {spin2 ? <CircularProgress /> : num2}
                    </Box>
                </Grid>
                <Grid item style={{ ...sty.spinnerChild }} xs={3}>
                    <Box style={{ ...sty.numHolder }}>
                        {spin3 ? <CircularProgress /> : num3}
                    </Box>
                </Grid>
            </Grid>

            {/* BUTTONS */}
            <Grid container justify="space-around" style={{ ...sty.grid }}>
                <Grid style={{ ...sty.buttonGrids }}>
                    <Button
                        style={{ ...sty.button }}
                        onClick={() => {
                            setSpin1(true);
                            setSpin2(true);
                            setSpin3(true);
                            const random1 = randomInteger(1, 9);
                            const random2 = randomInteger(1, 9);
                            const random3 = randomInteger(1, 9);

                            setNum1(random1);
                            setNum2(random2);
                            setNum3(random3);

                            dispatch({
                                type: c.act.spin,
                                payload: {
                                    one: random1,
                                    two: random2,
                                    three: random3,
                                    id: state.spinCounter + 1,
                                    time: Date.now(),
                                } as c.SpinRecord,
                            });
                        }}
                    >
                        Spin
                    </Button>
                </Grid>
                <Grid style={{ ...sty.buttonGrids }}>
                    <Button
                        style={{ ...sty.button }}
                        onClick={() => {
                            setNum1(7);
                            setNum2(7);
                            setNum3(7);
                            dispatch({
                                type: c.act.spin,
                                payload: {
                                    one: 7,
                                    two: 7,
                                    three: 7,
                                    id: Math.floor(Math.random() * 10000000),
                                    time: Date.now(),
                                } as c.SpinRecord,
                            });
                        }}
                    >
                        Debug
                    </Button>
                </Grid>
                <Grid style={{ ...sty.buttonGrids }}>
                    <Button
                        style={{ ...sty.button }}
                        onClick={() => {
                            x.setShowModal(!x.showModal);
                        }}
                    >
                        Close
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default GameModal;
