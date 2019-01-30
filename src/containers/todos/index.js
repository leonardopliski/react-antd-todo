import React from 'react';

// importing our Todos component
import Todos from '../../components/Todos'

// todo array
const todos = [
    'Make a good coffee',
    'Work hard',
    'Add Redux to our Todo List'
];

const TodosContainer = () => {
    return <Todos todos={todos} />
};

export default TodosContainer