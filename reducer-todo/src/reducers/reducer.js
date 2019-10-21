
export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Learn about redux',
    completed: false,
    id: 2
  },
  {
    item: 'Learn about computer science',
    completed: false,
    id: 3
  },
  {
    item: 'Learn about Nodejs',
    completed: false,
    id: 4
  },
  {
    item: 'Learn about Express',
    completed: false,
    id: 5
  },
  {
    item: 'Learn about Python',
    completed: false,
    id: 6
  },
]

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_TASK":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
        return [
          newItem, ...state
        ]
    case "TOGGLE_ITEM": 
      return state.map((item) => 
        item.id === action.payload 
        ? {
          ...item, 
          completed: !item.completed
         }
         : item
      )
      case "CLEAR_COMPLETED": 
         return state.filter(item => {
          return !item.completed
         })
    default: 
      return state;
  } 
  
}