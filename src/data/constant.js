export const capitalise = word => {
	return word[0].toUpperCase() + word.slice(1);
};

export const jobTypeFormat = job_type => {
	let jobType = '';
	job_type
		.split('_')
		.forEach(
			(word, index) =>
				(jobType += (index > 0 ? ' ' : '') + capitalise(word))
		);
	return jobType;
};

export const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
