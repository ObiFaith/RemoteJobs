import { Card, Loader, Search } from '..';
import { JobState } from '../data/jobContext';

const Jobs = () => {
	const pageLimit = 12;
	const {
		state: { jobs },
	} = JobState();
	const jobsPerPage = jobs.slice(0, pageLimit);
	console.log(jobsPerPage);
	return jobs.length > 0 ? (
		<section className="container py-32 relative">
			<Search />
			<div className="grid justify-between max-sm:justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{jobsPerPage.map(job => (
					<Card key={job.id} {...job} />
				))}
			</div>
			<div className="text-center">
				<button className="py-2.5 cursor-pointer rounded-lg mt-20 px-6 text-white font-semibold bg-purple-800">
					Load More
				</button>
			</div>
		</section>
	) : (
		<Loader />
	);
};

export default Jobs;
