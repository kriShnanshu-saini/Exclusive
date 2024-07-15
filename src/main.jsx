import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, SignUpPage } from '@/pages/index.js';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) throw new Error('Missing publishable key!');

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
	{
		path: '/auth/sign-up',
		element: <SignUpPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</ClerkProvider>
	</React.StrictMode>
);
