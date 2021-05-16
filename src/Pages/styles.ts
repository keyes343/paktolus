import CSS from 'csstype';

export type Classs = 'middleArea' | 'homeGrid' | 'footer' | 'button';

export const sty: {
    [x in Classs]: CSS.Properties;
} = {
    middleArea: {
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
        width: '100%',
        height: '7rem',
        backgroundColor: 'lightblue',
        position: 'fixed',
        bottom: '0',
        fontSize: '1.6rem',
        textAlign: 'center',
    },
    homeGrid: {
        display: 'grid',
        minHeight: '70vh',
        padding: '2rem',
        gridAutoColumns: '1fr',
        gridTemplateRows: '10rem 60vh 10rem',
    },
};
