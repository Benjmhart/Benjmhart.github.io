import { combineReducers } from "redux";
import IsOpenReducer from "./reducer_isOpen"
import ProjectsReducer from "./reducer_projects"
import EmploymentReducer from "./reducer_employment"
import EducationReducer from "./reducer_education"

const rootReducer = combineReducers({
	isOpen: IsOpenReducer,
	projects: ProjectsReducer,
	employment: EmploymentReducer,
	education: EducationReducer
	}
    
)

export default rootReducer;
