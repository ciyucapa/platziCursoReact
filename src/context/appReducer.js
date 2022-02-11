export const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };

        case 'DELETE_TASK':
         
            return {
                tasks: state.tasks.filter(index => index.id !== action.payload)
            };

        case 'UPDATE_TASK':
            const update = action.payload;

            const updateTask = state.tasks.map(task => {
                if(task.id === update.id) {
                    task.title = update.title
                    task.description = update.description
                }
                return task
            });

        return {
            tasks: updateTask
        };
            
        default:
            break;
    };
};