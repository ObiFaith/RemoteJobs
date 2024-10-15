import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import JobContext from './data/jobContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<JobContext>
			<App />
		</JobContext>
	</StrictMode>
);
