import { useParams } from 'react-router-dom';

const Job = () => {
	const { id } = useParams();

	return <section className="container">{id}</section>;
};

export default Job;
