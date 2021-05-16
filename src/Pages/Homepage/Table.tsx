import { Box, Grid } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { sty } from './styles';
import * as c from '../CONTEXT';
import moment from 'moment';

export interface TableProps {}

const Table: React.FC<TableProps> = () => {
    const headerArr = ['ID', 'Slot 1', 'Slot 2', 'Slot 3', 'Time'];

    const state = c.UseState()!;
    const dispatch = c.UseDispatch()!;

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
                            }}
                        >
                            {field}
                        </Grid>
                    );
                })}
            </Grid>

            {state.spinRecorder.map((record, i) => {
                const date = moment(record.time).format('MMMM D, YYYY');
                const time = moment(record.time).format('h:mma');
                // const hour = date.getHours();
                // const mins = date.getMinutes();
                // const day =
                return (
                    <Grid container key={i} direction="row">
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
