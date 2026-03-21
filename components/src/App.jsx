import './App.css'
import { Welcome } from './Welcome';
import Button from './Button';
import { ContactForm } from './ContactForm';
import { StyleForm } from './StyleForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';

// child components

// parenent components
function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name='Max'/>
      <Welcome name='Julia'/>
      <Welcome name='Chris'/>

      <Product 
        title='Apple' 
        price={5} 
        inStock={true} 
        categories={['Food', 'Fruit']} 
      />


      <Button />
      <ContactForm />
      <StyleForm />
      <CandidateProfile />
    </div>
  );
}

export default App
