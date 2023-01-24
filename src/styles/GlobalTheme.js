import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiListItem: {
      styleOverrides: {
        root: {
          '-webkit-tap-highlight-color': 'transparent',
        },
      },
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
      variants: [
        {
          props: { fixed: 'true' },
          style: {
            position: 'fixed',
            top: '0px',
            width: '100%',
            backgroundColor: '#fefefe',
            borderRadius: '0 0 5px 5px',
            boxShadow: '0px 14px 29px -26px rgba(10, 10, 10, 0.74)',
            zIndex: '1',
            padding: '5px',
            maxWidth: '500px',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '-webkit-tap-highlight-color': 'transparent',
        },
      },
    },
  },
});

export { theme };