export default {
    grid: {
        container: '130rem',
        gutter: '3.2rem'
    },
    border: {
        radius: '0.4rem'
    },
    font: {
        family:
            "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        light: 300,
        normal: 400,
        bold: 600,
        sizes: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.6rem',
            large: '1.8rem',
            xlarge: '2.0rem',
            xxlarge: '2.8rem',
            huge: '5.2rem'
        }
    },
    colors: {
        primary: '#f231a5',
        secondary: '#3cd3c1',
        mainbg: '#06092b',
        lightBg: '#F2F2F2',
        white: '#fafafa',
        black: '#030517',
        lightgray: '#eaeaea',
        gray: '#8f8f8f',
        darkgray: '#2e2f42',
        red: '#ff3347'
    },
    spacings: {
        xxxsmall: '0.4rem',
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out'
    }
} as const
