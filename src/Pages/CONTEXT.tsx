/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
import firebase from './firebase';

// import { t } from './incoming';
// import axios from 'axios';

import Homepage from './Homepage';
import { t } from '../Types';

export interface ContextDesktopProps {}

export enum act {
    spin = 'spin',
}

export type SpinRecord = {
    one: number;
    two: number;
    three: number;
    id: number;
    time: number;
};

export type initialState_type = {
    loggedIn: boolean;
    spinCounter: number;
    spinRecorder: SpinRecord[];
    balance: number;
};

// ------------------------------------------------------ REDUCER
const reducer = (
    state: initialState_type,
    action: { type: act; payload?: any }
) => {
    let newState = { ...state };
    const { type, payload } = action;
    const hasPair = (one: number, two: number, three: number) => {
        if (one === two || one === three || two === three) {
            return true;
        } else return false;
    };
    const allThree = (one: number, two: number, three: number) => {
        if (one === two && two === three) {
            return true;
        } else return false;
    };
    switch (type) {
        case act.spin:
            newState.spinCounter++;
            newState.balance--;
            if (payload) {
                const { one, two, three } = payload as SpinRecord;
                if (one === 7 && two === 7 && three === 7) {
                    newState.balance += 10;
                } else if (allThree(one, two, three)) {
                    newState.balance += 5;
                } else if (hasPair(one, two, three)) {
                    newState.balance += 0.5;
                }
            }
            payload && newState.spinRecorder.push(payload);
            break;
        default:
            break;
    }
    return newState;
};
// ------------------------------------------------------- STATE
const initialState: initialState_type = {
    loggedIn: false,
    spinCounter: 0,
    spinRecorder: [],
    balance: 50,
};
export const c2state = React.createContext<initialState_type | null>(null);
export const c2dispatch =
    React.createContext<Dispatch<{
        type: act;
        payload?: any;
    }> | null>(null);

// ------------------------------------------------------ CONTEXT
const Context: React.FC<ContextDesktopProps> = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <c2state.Provider value={{ ...state }}>
            <c2dispatch.Provider value={dispatch}>
                <Homepage />
            </c2dispatch.Provider>
        </c2state.Provider>
    );
};

const UseState = () => {
    const ctx = React.useContext(c2state);
    return ctx;
};
const UseDispatch = () => {
    const ctx = React.useContext(c2dispatch);
    return ctx;
};

export { Context, UseDispatch, UseState };
