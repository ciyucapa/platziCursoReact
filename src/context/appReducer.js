export const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };

        case 'DELETE_TASK':
        return {
            tasks: state.task.filter(index => index.id !== action.payload)
        };

        case 'EDIT_TASK':
        return {
            tasks: [...state.tasks, action.payload]
        };
            
        default:
            break;
    }
}