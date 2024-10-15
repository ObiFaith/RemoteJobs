import { useParams } from 'react-router-dom';
import { JobState } from '../data/jobContext';
import { BackBtn, NotFound } from '..';
import DOMPurify from 'dompurify';

const Job = () => {
	const { id } = useParams();
	const {
		state: { jobs },
	} = JobState();
	const job = jobs.find(job => job.id == id);
	const description = DOMPurify.sanitize(job?.description);

	return job ? (
		<section className="container pb-32">
			<div className="relative flex justify-end -top-[200px]">
				<BackBtn />
			</div>
			<div className="flex items-center shadow-md relative -top-10 bg-white">
				<div className="bg-white">
					<img
						className="object-cover"
						src={job.company_logo}
						alt={job.company_name + ' logo'}
					/>
				</div>
				<div className="flex max-lg:flex-col gap-y-2 w-full lg:items-center justify-between px-3 lg:px-6">
					<div className="flex items-center max-sm:hidden  gap-1">
						<p className="text-sm">Company:</p>
						<h2 className="font-bold text-purple-800 text-base md:text-lg lg:text-xl">
							{job.company_name}
						</h2>
					</div>
					<div className="flex items-center gap-1">
						<p className="max-sm:hidden text-sm">Job Title:</p>
						<h2 className="font-bold text-purple-800 text-base md:text-lg lg:text-xl">
							{job.title}
						</h2>
					</div>
				</div>
			</div>
			<div
				className="bg-white p-10 max-lg:p-6 shadow-md text-black/80"
				dangerouslySetInnerHTML={{
					__html: description,
				}}
			/>
			<div className="flex justify-center"><BackBtn /></div>
		</section>
	) : (
		<NotFound />
	);
};

export default Job;
