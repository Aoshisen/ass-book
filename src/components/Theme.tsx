import { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import { common, grey, teal, } from '@mui/material/colors';
import useDarkMode from "../hooks/useDarkMode";
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: grey[200],
			paper: common.white,
		},
		text: {
			primary: common.black,
			secondary: grey.A700,
		}
	},
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: grey[900],
			paper: grey.A700
		},
		text: {
			primary: common.white,
			secondary: teal[600]
		}
	},
});



const Theme: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isDarkMode] = useDarkMode()
	return <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
}

export default Theme;
