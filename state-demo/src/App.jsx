import './App.css'
import { Counter } from './Counter';
import { LoginCard } from './LoginCard';
import { SimpleCounter } from './SimpleCounter';
import { PrevStateCounter } from './PrevStateCounter';
import { BatchingCounter } from './BatchingCounter';
import { UserProfile } from './UserProfile';
import { TodoList } from './TodoList';

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      { /*
      <Counter />
      <LoginCard />
      */}
      <TodoList />
    </>
  );
}

export default App;
