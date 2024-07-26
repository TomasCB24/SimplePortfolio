import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(123, 31, 162)',       // Morado intenso
      dark: 'rgb(94, 53, 177)',        // Morado oscuro
      light: 'rgb(171, 71, 188)',      // Morado claro
      contrastText: 'rgb(255, 255, 255)',  // Blanco
    },
    secondary: {
      main: 'rgb(156, 39, 176)',       // Púrpura
      dark: 'rgb(123, 31, 162)',       // Púrpura oscuro
      light: 'rgb(186, 104, 200)',     // Púrpura claro
      contrastText: 'rgba(255, 255, 255, 0.87)', // Blanco translúcido
    },
    text: {
      primary: 'rgb(33, 33, 33)',     // Gris muy oscuro
      secondary: 'rgb(117, 117, 117)',// Gris medio
    },
    background: {
      default: 'rgb(245, 245, 245)',  // Gris muy claro
      paper: 'rgb(255, 255, 255)',    // Blanco
    },
    divider: 'rgb(224, 224, 224)',    // Gris claro
    alternate: {
      main: 'rgb(242, 228, 248)',     // Lila muy claro
      dark: 'rgb(232, 214, 240)',     // Lila claro un poco más oscuro
    },
    cardShadow: 'rgba(123, 31, 162, 0.11)', // Sombra morada ligera
  },
  typography: typography,
  components: components,
});

export default theme;


