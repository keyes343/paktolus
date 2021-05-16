import CSS from 'csstype';

export type Classs = 'navBar' | 'middleArea' | 'homeGrid' | 'footer' | 'button';

export const sty: {
    [x in Classs]: CSS.Properties;
} = {
    navBar: {
        // border:'2px solid red',
        height: '6rem',
        backgroundColor: 'lightblue',
        zIndex: -10,
    },
    middleArea: {
        border: '2px solid blue',
        padding: '1rem 0 0',
        margin: '0 0 0',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
    },
    button: {
        backgroundColor: 'lightblue',
    },
    footer: {
        border: '3px solid green',
        width: '100%',
        height: '7rem',
        backgroundColor: 'lightblue',
        position: 'fixed',
        bottom: '0',
    },
    homeGrid: {
        display: 'grid',
        minHeight: '70vh',
        border: '5px solid blue',
        padding: '2rem',
        gridAutoColumns: '1fr',
        gridTemplateRows: '10rem 60vh 10rem',
    },
};
