import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {

const [showAns, setShowAns] = useState(false);

  return ( <article className='question'><h2>{title}</h2>
  
  <div><button className='btn' onClick={() => setShowAns(!showAns)}>
    {showAns? <AiOutlineMinus/> : <AiOutlinePlus/>  } 
  </button>
  { showAns && <p>{ info } </p>}  </div>
  </article> )
};

export default Question;
