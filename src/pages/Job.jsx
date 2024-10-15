import { useParams } from 'react-router-dom';
import { JobState } from '../data/jobContext';
import { NotFound } from '..';

const Job = () => {
	const { id } = useParams();
	const {
		state: { jobs },
	} = JobState();
	const job = jobs.find(job => job.id == id);
	console.log(job);

	return job ? (
		<section className="container">
			<div className="flex">
				<div className="bg-white">
					<img
						className="rounded-lg object-cover"
						src={job.company_logo}
						alt={job.company_name + ' logo'}
					/>
				</div>
				<div className="">
					<h3>{job.company_name}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: job.description }}
					/>
				</div>
			</div>
			<div className=""></div>
			<div className=""></div>
		</section>
	) : (
		<NotFound />
	);
};

export default Job;
