import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
import Button from './module/Button.jsx';
import Student from './Student.jsx';
import Login from './Login.jsx';
import List from './List.jsx';
import Counter from './Counter.jsx';

function App() {
  const Fruit = [
    {id: "1",name: "apple",calories: 0},
    {id: "2",name: "banana",calories: 0},
    {id: "3",name: "orange",calories: 0}
  ]
  const Veggies = [
    {id: "4",name: "Carrot",calories: 0},
    {id: "5",name: "Corn",calories: 0},
    {id: "6",name: "Tomatoe",calories: 0}
  ]
  return (
      <>
        <Header />
        {/* <Food></Food> */}
        {/* <Card></Card>
        <Card></Card> */}
        {/* <Button></Button> */}
        {/* <Student name="nhan" age="18" isStudent={false}></Student>
        <Student name="nhan" age="18" isStudent={false}></Student>
        <Student></Student> */}
        {/* <Login name="Nhan" isLogged={true}></Login>
        <Login name="Nhan" isLogged={false}></Login> */}
        {/* {Fruit.length > 0 && <List title = {"Fruit"}/> }
        {Veggies.length >0 && <List listItem ={Veggies} title = {"Vegetables"}/> }
        */}
        <Counter />
        <Footer />
      </>
    );
}

export default App
