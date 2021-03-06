let nextTodoId = 0
import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './types';



export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})