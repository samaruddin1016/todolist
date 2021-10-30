import React from 'react';
import List from './List';
import Particles from 'react-particles-js';
import {tsParticles} from 'tsparticles'
const Particleoption = {
  particles:{
    number:{
      value:100,
      density:{
        enable:true,
        value_area:"1800.412",
        
      }
    },
    "color":"#fffff"
  }
 }

function App() {

  return (
     <div>
       <Particles  className = "particles" 
     params={Particleoption}>
</Particles>

       <List/>
    </div>
  );
}

export default App;
