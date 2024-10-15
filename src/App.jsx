import { Job, Jobs, Layout, NotFound } from '.';
import { ApiHandler } from './data/apiHandler';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { JobState } from './data/jobContext';

export default function App() {
	const { getJobs } = ApiHandler();
	const {
		state: { jobs },
	} = JobState();
	if (jobs.length === 0) getJobs();

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
					errorElement={<NotFound />}
				>
					<Route index element={<Jobs />} />
					<Route path="/:id" element={<Job />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
