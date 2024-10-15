import axios from 'axios';
import { JobState } from './jobContext';

export function ApiHandler() {
	const apiUrl = import.meta.env.VITE_API_BASE_URL;

	const { dispatch } = JobState();

	const getJobs = async () => {
		const { data } = await axios(apiUrl);
		dispatch({ type: 'SET_JOBS', payload: data.jobs });
	};

	return { getJobs };
}
