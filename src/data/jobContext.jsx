import { createContext, useContext, useReducer, useState } from 'react';
import { JobReducer } from './jobReducer';

const Job = createContext();

// eslint-disable-next-line react/prop-types
const JobContext = ({ children }) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [state, dispatch] = useReducer(JobReducer, { jobs: [] });

	return (
		<Job.Provider
			value={{ state, dispatch, errorMessage, setErrorMessage }}
		>
			{children}
		</Job.Provider>
	);
};

export default JobContext;
export const JobState = () => useContext(Job);
