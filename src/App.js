import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers  = [{
  'id' : '1',
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이화렬',
  'birthday' :'910101',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : '2',
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이홍렬',
  'birthday' :'940101',
  'gender' : '남자',
  'job' : '무직'
},
{
  'id' : '3',
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이무개',
  'birthday' :'911101',
  'gender' : '남자',
  'job' : '선수'
},

]

class App extends Component {
  render() {
  return (
    <div>
      {
        customers.map( c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday ={c.birthday}
            gender = {c.gender}
            job={c.job}
            />  
          )
        })
      }

    </div>
   );
  }
}

export default App;

