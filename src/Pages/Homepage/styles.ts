import CSS from 'csstype';

export type Classs =
    | 'mainWrapper'
    | 'buttonGrids'
    | 'button'
    | 'grid'
    | 'spinnerGrid'
    | 'spinnerChild'
    | 'numHolder'
    | 'table'
    | 'tableColumn';

export const sty: {
    [x in Classs]: CSS.Properties;
} = {
    mainWrapper: {
        position: 'fixed',
        // margin:'10rem',
        top: '20%',
        bottom: '20%',
        left: '20%',
        right: '20%',
        height: 'auto',
        width: 'auto',
        zIndex: 10,
        // border: '2px solid red',
        boxShadow: '0 0 20px 3px rgba(0,0,0,0.6)',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    grid: {
        position: 'absolute',
        bottom: '2rem',
        gap: '1rem',
    },
    buttonGrids: {
        width: '8rem',
        textAlign: 'center',
        // border: '2px solid',
    },
    button: {
        backgroundColor: 'lightblue',
    },
    //-----------
    spinnerGrid: {
        padding: '0 2rem',
    },
    spinnerChild: {
        height: '20rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numHolder: {
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
    },
    table: {
        margin: '1rem 0',
    },
    tableColumn: {
        width: '13rem',
        height: '4rem',
        border: '1px solid',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
