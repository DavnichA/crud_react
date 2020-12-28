const SET_DATA = 'my-app/app/SET_DATA';
const DELETE_DATA = 'my-app/app/DELETE_DATA';
const CHANGE_DATA = 'my-app/app/CHANGE_DATA';
const UPDATE_DATA = 'my-app/app/UPDATE_DATA';



let initialState = {
  status: 0,
  index: '',
  data: []
};

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: [...state.data, { name: action.name, address: action.address, id: Math.random() * 1000 }]
      }
    case DELETE_DATA:
      return {
        ...state,
        data: [...state.data.filter(item => item.id !== action.id)]
      }
    case CHANGE_DATA:
      return {
        ...state,
        status: action.number,
        index: action.index
      }
    case UPDATE_DATA:
      return {
        ...state, 
         data: state.data.map(item => {
           if (state.index === item.id) {
             return {
               ...item,
               name: action.name,
               address: action.address
             }
           }
           return item;
         })
      }

    default:
      return state;
  }
}

// action
export const setData = (name, address) => ({ type: SET_DATA, name, address });
export const delData = (id) => ({ type: DELETE_DATA, id });
export const changeData = (number, index) => ({ type: CHANGE_DATA, number, index });
export const updateData = (name, address) => ({ type: UPDATE_DATA, name, address });

export default homePageReducer;