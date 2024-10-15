import './loading.css';
import { Error } from '../..';
import { JobState } from '../../data/jobContext';

const Loader = () => {
	const { errorMessage } = JobState();
	return errorMessage ? (
		<Error error={errorMessage} />
	) : (
		<div className="justify-center grid items-center h-[70svh]">
			<div className="loading"></div>
		</div>
	);
};

export default Loader;
