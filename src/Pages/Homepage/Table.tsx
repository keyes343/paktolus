import { Box, Grid } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { sty } from './styles';
import * as c from '../CONTEXT';
import moment from 'moment';

export interface TableProps {}

const Table: React.FC<TableProps> = () => {
    const headerArr = ['ID', 'Slot 1', 'Slot 2', 'Slot 3', 'Time'];
    const [reverse, setReverse] = useState<{
        btn: 'ID' | 'Time';
        ascending: boolean;
    }>({
        btn: 'ID',
        ascending: true,
    });
    const [reverseTime, setReverseTime] = useState(false);

    const state = c.UseState()!;

    return (
        <Box style={{ ...sty.table }}>
            <Grid
                container
                direction="row"
                style={{ backgroundColor: 'lightblue' }}
            >
                {headerArr.map((field, i) => {
                    return (
                        <Grid
                            key={i}
                            style={{
                                ...sty.tableColumn,
                                borderRight: '1px solid',
                                cursor:
                                    field === 'ID' || field === 'Time'
                                        ? 'pointer'
                                        : '',
                            }}
                            onClick={() => {
                                console.log({ field });
                                if (field === 'ID' || field === 'Time') {
                                    setReverse({
                                        btn: field,
                                        ascending: !reverse.ascending,
                                    });
                                }
                            }}
                        >
                            {field}
                        </Grid>
                    );
                })}
            </Grid>

            {state.spinRecorder
                .sort((a, b) => {
                    let toReturn: number;
                    if (reverse.btn === 'ID') {
                        if (!reverse.ascending) {
                            toReturn = b.id - a.id;
                        } else toReturn = a.id - b.id;
                    } else if (reverse.btn === 'Time') {
                        if (!reverse.ascending) {
                            toReturn = b.time - a.time;
                        } else toReturn = a.time - b.time;
                    } else toReturn = 1;
                    return toReturn;
                })
                .map((record, i) => {
                    const date = moment(record.time).format('MMMM D, YYYY');
                    const time = moment(record.time).format('h:mma');
                    // const hour = date.getHours();
                    // const mins = date.getMinutes();
                    // const day =
                    return (
                        <Grid
                            container
                            key={i}
                            direction="row"
                            justify="space-around"
                            // style={{ border: '2px solid red' }}
                        >
                            <Grid item style={{ ...sty.tableColumn }}>
                                {record.id}
                            </Grid>
                            <Grid item style={{ ...sty.tableColumn }}>
                                {record.one}
                            </Grid>
                            <Grid item style={{ ...sty.tableColumn }}>
                                {record.two}
                            </Grid>
                            <Grid item style={{ ...sty.tableColumn }}>
                                {record.three}
                            </Grid>
                            <Grid item style={{ ...sty.tableColumn }}>
                                {date} {time}
                            </Grid>
                        </Grid>
                    );
                })}
        </Box>
    );
};

export default Table;
