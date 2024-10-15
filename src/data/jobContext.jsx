import { createContext, useContext, useReducer } from 'react';
import { JobReducer } from './jobReducer';

const Job = createContext();

// eslint-disable-next-line react/prop-types
const JobContext = ({ children }) => {
	const [state, dispatch] = useReducer(JobReducer, { jobs: [] });

	return <Job.Provider value={{ state, dispatch }}>{children}</Job.Provider>;
};

export default JobContext;
export const JobState = () => useContext(Job);
