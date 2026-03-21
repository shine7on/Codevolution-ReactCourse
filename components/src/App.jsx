import './App.css'
import { Welcome } from './Welcome';
import Button from './Button';
import { ContactForm } from './ContactForm';
import { StyleForm } from './StyleForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';
import { UserDetails } from './UserDetails';
import { ProductList } from './ProductList';


// parenent components
function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>
      <UserDetails name='Bruce Wayne' isOnline={true}/>
      <Welcome name='Max'/>
      <Welcome name='Julia'/>
      <Welcome name='Chris'/>
      <br />
      <Greeting />
      <Greeting name='Alex'/>
      <Greeting message='Yey'/>
      <Greeting name='Eric' message='Yoo'/>
      <br />
      <CardWrapper title='User Profile'>
        <p>Bruce Wayce</p>
        <p>batman@gmail.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <br />
      <Product 
        title='Apple' 
        price={5} 
        inStock={true} 
        categories={['Food', 'Fruit']} 
      />
      <Button />
      <br />
      <ContactForm />
      <StyleForm />
      <CandidateProfile />

      <ProductList />
    </div>
  );
}

export default App
