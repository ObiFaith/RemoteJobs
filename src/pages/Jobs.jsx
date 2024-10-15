import { useState } from 'react';
import { Card, Loader, Search } from '..';
import { JobState } from '../data/jobContext';

const Jobs = () => {
	const [count, setCount] = useState(1);
	const pageLimit = count * 12;
	const {
		state: { jobs },
	} = JobState();
	const jobsPerPage = jobs.slice(0, pageLimit);
	return jobs.length > 0 ? (
		<section className="container py-32 relative">
			{/* <Search /> */}
			<div className="grid justify-between max-sm:justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{jobsPerPage.map(job => (
					<Card key={job.id} {...job} />
				))}
			</div>
			{pageLimit < jobs.length && (
				<div className="text-center">
					<button
						className="btn"
						onClick={() => setCount(prevCount => prevCount + 1)}
					>
						Load More
					</button>
				</div>
			)}
		</section>
	) : (
		<Loader />
	);
};

export default Jobs;
