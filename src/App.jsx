// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Find from './Find'
// import Display from './Display'

// const App=()=>{
// const [currview,setcurrview]=useState('finder')
// const [selectedrecipe,setselecrecipe]=useState(null);

// const gotorecipe=(recipeid)=>{
//   setselecrecipe(recipeid);
//   setcurrview('details');
// };

// const gobacktosearch=()=>{
// setcurrview('finder');
// };


  

//   return (
//     <div style={{
//       backgroundImage:`url("2.jpg")`,
//       backgroundSize:"cover",
//       backgroundAttachment:"fixed",
//       minHeight:"100vh",
//     }} >
//       <h1>Recipe finder</h1>
//       {currview==='finder' && (
//         <Find onrecipeclick={gotorecipe}/>
//       )}
//       {currview==='details' && (
//         <Display recipeid={selectedrecipe} goback={gobacktosearch} className="items-center"/>
//       )}
//       </div>

//   );
// }

// export default App;

import { useState } from 'react';
import Find from './Find';
import Display from './Display';


const App = () => {
  const [currview, setcurrview] = useState('finder');
  const [selectedrecipe, setselecrecipe] = useState(null);

  const gotorecipe = (recipeid) => {
    setselecrecipe(recipeid);
    setcurrview('details');
  };

  const gobacktosearch = () => {
    setcurrview('finder');
  };

  return (
    <div className="app-container">
      <h1 className="text-center font-bold mt-6">Recipe Finder</h1>
      <div className="container mx-auto p-6">
        {currview === 'finder' && <Find onrecipeclick={gotorecipe} />}
        {currview === 'details' && <Display recipeid={selectedrecipe} goback={gobacktosearch} />}
      </div>
    </div>
  );
};

export default App;

