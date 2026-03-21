import './App.css'
import { Welcome } from './Welcome';
import Button from './Button';
import { ContactForm } from './ContactForm';
import { StyleForm } from './StyleForm';
import { CandidateProfile } from './CandidateProfile';

// child components

// parenent components
function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name='Max'/>
      <Welcome name='Julia'/>
      <Welcome name='Chris'/>


      <Button />
      <ContactForm />
      <StyleForm />
      <CandidateProfile />
    </div>
  );
}

export default App
