import { ArrowLeft } from 'lucide-react';
import { goToTop } from '../data/constant';
import { Link } from 'react-router-dom';

const BackBtn = () => {
	return (
		<Link className="btn" onClick={goToTop} to="/">
			<span className="flex gap-3 items-center">
				<ArrowLeft
					size={16}
					strokeWidth={2}
					absoluteStrokeWidth={true}
				/>
				Back
			</span>
		</Link>
	);
};

export default BackBtn;
