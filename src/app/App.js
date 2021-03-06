// react
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// app
import AppRouter from './AppRouter';
import LinearProgress from '@material-ui/core/LinearProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

// theme setting
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6fb98f',
			contrastText: '#ffffff'
		},
		error: {
			main: '#e74c3c'
		}
	}
});

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Suspense fallback={<LinearProgress />}>
				<BrowserRouter>
					{/* Header */}

					<AppRouter />

					{/* Footer */}
				</BrowserRouter>
			</Suspense>
		</MuiThemeProvider>
	);
};
export default App;
