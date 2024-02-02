import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random'; 
import BoxColor from './components/BoxColor'; 
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
        <h1 style={{ fontWeight: 'bold' }}>IdCard</h1>
        <div className="box">
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div className="box">
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      
        <h1 style={{ fontWeight: 'bold' }}>Greetings</h1>
      <div className="box">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <h1 style={{ fontWeight: 'bold' }}>Random</h1>
      <div className="box">
        
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1 style={{ fontWeight: 'bold' }}>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      

      <h1 style={{ fontWeight: 'bold' }}>CreditCard</h1>
     <div className="CreditCard"> 
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
      </div>
      <div className="CreditCard"> 
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
      </div>
      <div className="CreditCard"> 
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
