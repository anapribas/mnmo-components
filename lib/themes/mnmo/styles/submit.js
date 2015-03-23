import shared from './shared';
let styles = {
    div: {
        paddingLeft: 20,
        paddingRight: 20 
    },
    input: {
        width: '100%',
        lineHeight: 1.7,
        letterSpacing: 0.5,
        fontFamily: 'Roboto Bold',
        border: 'none',
        borderRadius: 2,
        color: '#fff',
        backgroundColor: shared.colors.blue
    },
    disabled: {
        input: {
            backgroundColor: shared.colors.gray[0],
            color: shared.colors.gray[1]
        }
    }
};
export default () => styles;