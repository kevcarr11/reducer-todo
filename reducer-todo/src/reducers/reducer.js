
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
      default: 
        return state;
  } 
  
}