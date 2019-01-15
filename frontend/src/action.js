export const Add_Todo = 'Add_Todo';


export function addTodo(text) {
    return {
        type: Add_Todo,
        text
    };
}
