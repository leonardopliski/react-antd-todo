import { addTodo } from '../../../../src/store/todo/actions';
import { v4 as uuidV4 } from 'uuid';
import faker, { random } from 'faker';
import { ITodo } from 'store/todo/models/todo.model';

/**
 * Create a test todo with fake values.
 *
 * @param id
 */
export function createTestTodo(props: Partial<ITodo>) {
  return addTodo({
    id: props.id ?? uuidV4(),
    name: props.name ?? faker.lorem.paragraph(),
    completed: props.completed ?? random.boolean(),
  });
}
