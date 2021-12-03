import React, { useState } from 'react';
import { SelectSign } from './components/selectSign.jsx'; 
import { SelectTimeframe } from './components/SelectTimeframe'; 
import { Horoscope } from './components/Horoscope'; 
function Home() {
    
  const [selectedSign ,setSelectedSign]=useState(null); 
  const [SelectedTimeframe ,setSelectedTimeframe]=useState(null); 
  const restart =()=> 
  { 
    setSelectedSign(null); 
    setSelectedTimeframe(null); 
  } 
    return (
      <div className="App"> 
  
 
      <h1>the horoscope</h1> 

       <h2 style={{fontSize:"30px"}}> {selectedSign}</h2> 
     {!selectedSign && <h2><b>please select your sign</b></h2>}
    {!selectedSign &&   <SelectSign onSignSelected={setSelectedSign} />}  
 
{ selectedSign && !SelectedTimeframe &&   <SelectTimeframe onTimeframeSelected={setSelectedTimeframe}/>}<br/> 
 
{  
        selectedSign &&  SelectedTimeframe &&  
        <Horoscope sign={selectedSign} 
        timeframe={SelectedTimeframe} 
/> 
} 
 
{selectedSign && <button onClick={restart}>restart</button>} 

  </div> 
  
    )
}

export default Home
