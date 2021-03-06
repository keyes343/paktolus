/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
import firebase from './firebase';

// import { t } from './incoming';
// import axios from 'axios';

import Homepage from './Homepage';

export type User = {
    displayName: string;
    email: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL?: string;
    refreshToken?: string;
    uid?: string;
};

export interface ContextDesktopProps {}

export enum act {
    spin = 'spin',
    user = 'user',
}

export type SpinRecord = {
    one: number;
    two: number;
    three: number;
    id: number;
    time: number;
};

export type initialState_type = {
    user: false | User;
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
            const str = newState.balance.toString();
            console.log({ str });
            localStorage.setItem('balance', str);
            break;
        case act.user:
            newState.user = payload ?? false;
            break;
        default:
            break;
    }
    return newState;
};
// ------------------------------------------------------- STATE
const initialState: initialState_type = {
    user: false,
    spinCounter: 0,
    spinRecorder: [],
    balance: 99.99,
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

    React.useEffect(() => {
        // TRACKS AUTH CHANGE VIA FIREBASE
        firebase.auth().onAuthStateChanged((u) => {
            dispatch({ type: act.user, payload: u });
        });
    }, []);

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
