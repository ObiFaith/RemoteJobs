import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="justify-center grid items-center h-[70svh]">
			<div className="text-center">
				<h1 className="text-3xl text-red md:text-4xl lg:text-5xl">
					404 Error | Page Not Found
				</h1>
				<p className="py-5 text-xl">
					Go to{' '}
					<Link
						to="/"
						className="underline underline-offset-2 text-purple-800"
					>
						homepage and apply for a job
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
