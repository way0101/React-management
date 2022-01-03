
import Customer from './component/Customer'
import './App.css';

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': "길지현",
  'birthday': "19920727",
  'univ':"한국대학교",
  'gender':"남성"
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name': "홍길동",
  'birthday': "19930727",
  'univ':"한국대학교",
  'gender':"여성"
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name': "이순신",
  'birthday': "19940727",
  'univ':"한국대학교",
  'gender':"남성"
},
]


function App() {
  return (
    <div>
    {
      customers.map((item) => {
        return(
          <Customer
          key = {item.id}
          id={item.id}
          image ={item.image}
          name ={ item.name}
          birthday ={item.birthday}
          univ = {item.univ}
          gender= {item.gender}
          />
        )
      } )
    }
    </div>
  );
}

export default App;
