/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { jobTypeFormat } from '../data/constant';

const Card = ({
	id,
	publication_date,
	job_type = '',
	company_logo,
	title,
	company_name,
	candidate_required_location,
}) => {
	return (
		<div className="py-6 px-4 relative bg-white max-w-96 rounded-lg shadow-md">
			<div className="absolute rounded-lg -top-5">
				<img
					className="rounded-lg object-cover"
					width={50}
					height={50}
					src={company_logo}
					alt={company_name + ' logo'}
				/>
			</div>
			<div className="grid gap-5">
				<div className="grid gap-2 pt-8 text-black/40 md:text-base">
					<div className="flex gap-1.5 text-xs items-center">
						{publication_date && (
							<>
								<span>
									{new Date().getHours() -
										publication_date
											.split(':')[0]
											.slice(-2)}{' '}
									hours ago
								</span>
								<span className="w-1 h-1 bg-black/40 rounded-full"></span>
							</>
						)}
						{job_type && <span>{jobTypeFormat(job_type)}</span>}
					</div>
					{title && (
						<Link
							to={`/${id}`}
							className="text-black/80 hover:underline underline-offset-2 hover:text-purple-600 font-bold text-base sm:text-base md:text-lg lg:text-xl"
						>
							{title.slice(0, 26) +
								(title.length > 26 ? '...' : '')}
						</Link>
					)}
					{company_name && <p className="text-sm">{company_name}</p>}
				</div>
				{candidate_required_location && (
					<p className="text-purple-600 text-base font-semibold">
						{candidate_required_location}
					</p>
				)}
			</div>
		</div>
	);
};

export default Card;
