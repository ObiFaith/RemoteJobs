// eslint-disable-next-line react/prop-types
const Error = ({ error }) => {
	return (
		<h2 className="text-3xl text-red md:text-4xl lg:text-5xl justify-center grid items-center h-[70svh]">
			{error}
		</h2>
	);
};

export default Error;
