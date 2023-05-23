import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {

const [question, setQuestion] = useState(data);



  return <main>
  <div className='container'>
  <h1 className=''>Questions</h1>
  <section className='info'>
  {question.map((questions)=> {
 
   return<Question  key={questions.id} {...questions} /> 
  })}  


</section>
</div>
  </main>;
}

export default App;
