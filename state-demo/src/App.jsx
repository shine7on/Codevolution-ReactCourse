import './App.css'
import { Counter } from './Counter';
import { LoginCard } from './LoginCard';
import { SimpleCounter } from './SimpleCounter';
import { PrevStateCounter } from './PrevStateCounter';
import { BatchingCounter } from './BatchingCounter';
import { UserProfile } from './UserProfile';

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      { /*
      <Counter />
      <LoginCard />
      */}
      <UserProfile />
    </>
  );
}

export default App;
