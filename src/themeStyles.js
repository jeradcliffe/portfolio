import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const themeStyles = {
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
}
