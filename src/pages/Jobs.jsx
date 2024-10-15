import { Card, Search } from '..';
import { JobState } from '../data/jobContext';

const Jobs = () => {
	const pageLimit = 12;
	const {
		state: { jobs },
	} = JobState();
	const jobsPerPage = jobs.slice(0, pageLimit);
	console.log(jobsPerPage);
	return (
		<section className="container py-32 relative">
			<Search />
			<div className="grid justify-between max-sm:justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{jobsPerPage.map(job => (
					<Card key={job.id} {...job} />
				))}
			</div>
		</section>
	);
};

export default Jobs;
