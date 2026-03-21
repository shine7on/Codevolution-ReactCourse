import './App.css'
import { Welcome } from './Welcome';
import Button from './Button';
import { ContactForm } from './ContactForm';
import { StyleForm } from './StyleForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';

// child components

// parenent components
function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name='Max'/>
      <Welcome name='Julia'/>
      <Welcome name='Chris'/>

      <Greeting />
      <Greeting name='Alex'/>
      <Greeting message='Yey'/>
      <Greeting name='Eric' message='Yoo'/>

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
