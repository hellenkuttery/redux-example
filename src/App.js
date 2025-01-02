import "./App.css";
import Counter from "./components/counter/Counter";
import {Provider} from  "react-redux";
import { store } from "./redux/store";
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App bg-secondary w-50 d-flex flex-column m-auto p-5 mt-3 border border-3">
    <Provider store={store}>
      <Counter/>
      <TodoList></TodoList>
    </Provider>
    </div>
  );
}

export default App;
