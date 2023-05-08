import * as ActionType from './ActionTypes'
const iniitialState = {
  applicationPeriod: [],
  attorneyProjectList: [],
  skillLevel: [],
  projectTypeList: [],
  projectType: [],
  industries: [],
  teamMembersList: [],
  projectList: [],
  projectDetail: null,
  postProjectDetail: null,
  postedProjects: [],
  applicantList: [],
  applicantProfile: null,
  clioMatters: null,
  conflicts: null,
  getConflicts: null,
  getAllProjectsForConflicts: null,
  setConflicts: null,
  manageConflicts: null,
  showProject: null,
  stateList: null,
  hourList: null,
  dateList: null,
  clientToken : null,
  showTeam: null,
  postTeam: null,
  
}

const FilterReducer = (state = iniitialState, action) => {
  switch (action.type) {
    case ActionType.APPLICATION_PERIOD_SUCCESS:
      return {
        ...state,
        applicationPeriod: action.payload,
      };
      break;
    case ActionType.ATTORNEY_PROJECTS_LIST:
      return {
        ...state,
        attorneyProjectList: action.payload,
      };
      break;
    case ActionType.SKILL_LEVEL_LIST:
      return {
        ...state,
        skillLevel: action.payload,
      };
      break;
    case ActionType.PROJECT_TYPES_LIST:
      return {
        ...state,
        projectTypeList: action.payload,
      };
      break;
    case ActionType.INDUSTRIES_LIST:
      return {
        ...state,
        industries: action.payload,
      };
      break;
    case ActionType.TEAM_MEMBERS_LIST:
      return {
        ...state,
        teamMembersList: action.payload,
      };
      break;
    case ActionType.FIND_PROJECT_DETAIL:
      return {
        ...state,
        projectDetail: action.payload,
      };
      break;
    case ActionType.UPDATE_PROJECT:
      return {
        ...state,
        postProjectDetail: action.payload,
      };
      break;
    case ActionType.PROJECT_LIST:
      return {
        ...state,
        projectList: action.payload,
      };
      break;
    case ActionType.PROJECT_TYPE:
      return {
        ...state,
        projectType: action.payload,
      };
    case ActionType.POSTED_PROJECTS:
      return {
        ...state,
        postedProjects: action.payload
    };
    case ActionType.APPLICANT_LIST:
      return {
        ...state,
        applicantList: action.payload
      }
    case ActionType.APPLICANT_PROFILE:
      return {
        ...state,
        applicantProfile: action.payload
      }
    case ActionType.CLIO_MATTER_SUCCESS:
      return {
        ...state,
        clioMatters: action.payload
      }
    case ActionType.CONFLICTS:
      return {
        ...state,
        conflicts: action.payload
      }
    case ActionType.GET_ALL_PROJECTS_FOR_CONFLICTS:
      return {
        ...state,
        getAllProjectsForConflicts: action.payload
      }
    case ActionType.GET_CONFLICTS:
      return {
        ...state,
        getConflicts: action.payload
      }
    case ActionType.SET_CONFLICTS:
      return {
        ...state,
        setConflicts: action.payload
      }
    case ActionType.MANAGE_CONFLICTS:
      return {
        ...state,
        manageConflicts: action.payload
      }
    case ActionType.STATES_FOR_SUBSCRIPTION :
      return {
        ...state,
        stateList: action.payload
      }
      case ActionType.TOTAL_HOURS_LIST :
      return {
        ...state,
        hourList : action.payload
      }
      case ActionType.TARGET_DATE_LIST :
      return {
        ...state,
       dateList : action.payload
      }
      case ActionType.SHOW_PROJECT :
      return {
        ...state,
       showProject : action.payload
      }
    case ActionType.UPDATE_CLIENT_TOKEN:
      return {
        ...state,
        clientToken: action.payload
      }
      case ActionType.SHOW_TEAM:
        return {
          ...state,
          showTeam: action.payload,
        };
      case ActionType.UPDATE_POST_TEAM:
        return {
          ...state,
          postTeam: action.payload,
        };
    default:
      return state
  }
}
export default FilterReducer