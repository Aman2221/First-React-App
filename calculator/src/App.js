import React from 'react';
import Card from './Card.jsx'
import './App.css'

function App(){
  return(
    <>
    <h1>REACT APP</h1>
        <Card imgsrc='https://fsa.zobj.net/crop.php?r=C68XlUJ5rLZCc1V6lx6h_hPuasmq6XCYe_DUkz6XjHrfUcPy5jrIz0n7buThezAhquyyCOCjjhpbHdcGmq7E3cEqFOy8Wg49uyZNUhdbqYpoarvK6zmXfmdkjElYVNLXcmBj6pqpj2Tqgplf'
          para='Money heist'
          anchor ='https://www.netflix.com/in/title/80192098'
        />
        <Card 
          imgsrc='https://fsb.zobj.net/crop.php?r=UatZ2AKhqyRDE0iqTGh1YDn0Fvn9jpFE5-R9WI2A8hvDloDHoOF7cjKnh99UyQ9-9LrePCyUKXd51TMU44WodUrMtoqyflcroON8h2Rmkp0Z_ne_pLGZtILw71TMfkmPL4bnZmkSDbauCijO'
          para='Sacred games'
          anchor ='https://www.netflix.com/in/title/80115328#:~:text=Sacred%20Games.%201%201.%20Ashwathama.%2051m.%20A%20mysterious,4%204.%20Brahmahatya.%205%205.%20Sarama.%20More%20items'
        />
        <Card
          imgsrc='https://fsb.zobj.net/crop.php?r=ROyY9ub04ch8xJ6rsyiO72Di_Oa5TNfClxuGmVJt2oOMBAYcawvV6ZlUge9E3PBp-QqxFcPi5KcDUVNkla8vH6wl09-_RVPEC20OrsVQtYBOTf7AqzTiL69AdXk_FyVBAuhujv1rMtWEHmYi'
          para='Dark'
          anchor ='https://www.netflix.com/in/title/80100172'
        />
    </>
  )
}
export default App;