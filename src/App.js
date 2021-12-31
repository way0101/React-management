
import Customer from './component/Customer'
import './App.css';

const customer = {
  'name': "길지현",
  'birthday': "19920727",
  'univ':"한국대학교",
  'gender':"남성"
}


function App() {
  return (
    <Customer
    name={customer.name}
    birthday={customer.birthday}
    univ ={customer.univ}
    gender={customer.gender}/>
  );
}

export default App;
