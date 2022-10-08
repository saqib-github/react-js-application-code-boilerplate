import * as types from "../actions/actionTypes";

export const initialMMState = {
  sidebar: {
    collapsed: false,
  },
  add: false,
  deleteRecord: false,
  // all data of applcation
  employees: [],
  employeesPaginationLinks: {},
  customers: [],
  customersPaginationLinks: {},
  properties: [],
  propertiesPaginationLinks: {},
  employeeGroupsList: [],
  //
  regionsList: [],
  //

  
  propertiesList: [],
  customersListing: [],
  propertyUnits: [],
  occupancyReport: [],
  // active property id
  activePropertyId: '',
};

export const rootReducer = (state = initialMMState, action) => {
  switch (action.type) {
    case types.SIDEBAR_COLLAPSED:
      return { ...state, sidebar: { collapsed: action.data.collapsed } };
    case types.SET_CHECKIN_DATA:
      return { ...state, checkinData: action.data };
    case types.ALL_RECORDS:
      console.log(action, "dwqdwqdqwdqwd");
      return { ...state, [action.data.keyOfData]: action.data.data };
    case types.ADD_RECORD:
      return { ...state, add: action.data };
    case types.DELETE_RECORD:
      return { ...state, deleteRecord: action.data };
    case types.SAVE_PROPERTY_ID:
      return { ...state, activePropertyId: action.data };
    default:
      return state;
  }
};
