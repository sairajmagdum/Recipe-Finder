// import React,{useState,useEffect} from "react";
// import axios from 'axios';


// const Find =({onrecipeclick})=>{
//   const [query,setquery]=useState("");
//   const[recipe,setrecipe]=useState([]);
//   const[error,seterror]=useState("null");
//   const[loading,setload]=useState(false);

// const searchrecipe=async()=>{
//   if(!query) return;
//   setload(true);
//   seterror(null);
//   try{
//     const response=await
//     axios.get('https://api.spoonacular.com/recipes/complexSearch',{
//       params:{
//         query:query,
//         apiKey:"76591525894f448bbff6649c0e05a73f"
//       },
//     });
//     setrecipe(response.data.results);
//   }catch(error){
//     seterror('Error fetching');
//   }
//   setload(false);
// };



//   return (
// <div>
//   <div>
//     <input
//     type="text"
//     placeholder="Search by ingredient"
//     value={query}
//     onChange={(e)=>setquery(e.target.value)}
//     className="border"
//     />
//     <button onClick={searchrecipe} disabled={loading}>
//       {loading?'Searching':'Search'}
//     </button>
//   </div>
//   {error && <p>{error}</p>}
//   <div>
//     {recipe.length===0?(
//   <p>No recipes found</p>
// ):(
//   recipe.map((item)=>(
//     <div
//     key={item.id}
//     onClick={()=>onrecipeclick(item.id)}
//     style={{cursor:'pointer'}}>
//       <h2>{item.title}</h2>
//       <img src={item.image} alt={item.title} width={150} className="flex"/>
//     </div>
//   ))
// )}
//   </div>
// </div>

//     );
// }

// export default Find;


import React, { useState } from 'react';
import axios from 'axios';

const Find = ({ onrecipeclick }) => {
  const [query, setquery] = useState('');
  const [recipe, setrecipe] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setload] = useState(false);

  const searchrecipe = async () => {
    if (!query) return;
    setload(true);
    seterror(null);
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          query: query,
          apiKey: "76591525894f448bbff6649c0e05a73f",
        },
      });
      setrecipe(response.data.results);
    } catch (error) {
      seterror('Error fetching recipes');
    }
    setload(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border">
      <div className="flex gap-27">
        <input
          type="text"
          placeholder="Search by ingredient 🍴"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        <button onClick={searchrecipe} disabled={loading} className="bg-green-500 px-3 py-3 text-xs rounded-md w-25 h-10 flex justify-center items-center mt-6">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipe.length === 0 ? (
          <p className=" text-center">No recipes found  :(</p>
        ) : (
          recipe.map((item) => (
            <div
              key={item.id}
              onClick={() => onrecipeclick(item.id)}
              className="cursor-pointer bg-white shadow-lg p-4 rounded-lg flex flex-col items-center hover:bg-gray-100 transition"
            >
              <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold mt-3 text-center">{item.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Find;
