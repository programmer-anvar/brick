import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { protectedRouter, publicRouter } from './routes/routes';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';
import { ToastContainer } from 'react-toastify';
import { PrimeReactProvider } from 'primereact/api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons CSS
import 'react-responsive-modal/styles.css'; // Reactive Modal

const ProtectedRoutes = () => {
	const token = useSelector((state: RootState) => state.auth.token);

	if (token) {
		return <RouterProvider router={protectedRouter} />;
	}

	return <RouterProvider router={protectedRouter} />;
};

const queryClient = new QueryClient();

const App = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ToastContainer />
				<PrimeReactProvider>
					<ProtectedRoutes />
				</PrimeReactProvider>
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
