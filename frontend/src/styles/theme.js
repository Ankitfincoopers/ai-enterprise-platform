// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#10B981', // Green color
//       light: '#34D399',
//       dark: '#059669',
//       contrastText: '#FFFFFF',
//     },
//     secondary: {
//       main: '#3B82F6',
//       light: '#60A5FA',
//       dark: '#2563EB',
//     },
//     background: {
//       default: '#FFFFFF',
//       paper: '#F9FAFB',
//     },
//     text: {
//       primary: '#111827',
//       secondary: '#6B7280',
//     },
//     success: {
//       main: '#10B981',
//     },
//     warning: {
//       main: '#F59E0B',
//     },
//     error: {
//       main: '#EF4444',
//     },
//     info: {
//       main: '#3B82F6',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontSize: '3.5rem',
//       fontWeight: 700,
//       lineHeight: 1.2,
//     },
//     h2: {
//       fontSize: '2.75rem',
//       fontWeight: 700,
//       lineHeight: 1.3,
//     },
//     h3: {
//       fontSize: '2.25rem',
//       fontWeight: 600,
//       lineHeight: 1.4,
//     },
//     h4: {
//       fontSize: '1.875rem',
//       fontWeight: 600,
//       lineHeight: 1.5,
//     },
//     h5: {
//       fontSize: '1.5rem',
//       fontWeight: 600,
//       lineHeight: 1.6,
//     },
//     h6: {
//       fontSize: '1.25rem',
//       fontWeight: 600,
//       lineHeight: 1.6,
//     },
//     body1: {
//       fontSize: '1rem',
//       lineHeight: 1.7,
//     },
//     body2: {
//       fontSize: '0.875rem',
//       lineHeight: 1.7,
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 600,
//           borderRadius: 8,
//           padding: '10px 24px',
//         },
//         containedPrimary: {
//           background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//           '&:hover': {
//             background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//           transition: 'transform 0.2s, box-shadow 0.2s',
//           '&:hover': {
//             transform: 'translateY(-4px)',
//             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//           },
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#FFFFFF',
//           color: '#111827',
//           boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//         },
//       },
//     },
//   },
// });

// export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
    success: {
      main: '#10B981',
    },
    warning: {
      main: '#F59E0B',
    },
    error: {
      main: '#EF4444',
    },
    info: {
      main: '#3B82F6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.6,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: (factor) => `${0.25 * factor}rem`, // 0.25rem = 4px
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#111827',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;