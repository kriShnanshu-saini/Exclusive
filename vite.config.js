import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// install: npm i -D @types/node
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@public': `${path.resolve(__dirname, './public/')}`,
		},
	},
});
