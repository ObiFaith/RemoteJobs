export const JobReducer = (state, action) => {
	switch (action.type) {
		case 'SET_JOBS':
			return { ...state, jobs: action.payload };
	}
};
