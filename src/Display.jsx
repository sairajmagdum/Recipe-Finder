// import React,{useState,useEffect} from "react";
// import axios from 'axios';


// const Display= ({recipeid,goback})=>{
// const [recipe,setrecipe]=useState(null);
// const [loading,setload]=useState(true);

// const fetchrecipedetails=async()=>{
//     setload(true);
//     try{
//         const response=await axios.get(
//             `https://api.spoonacular.com/recipes/${recipeid}/information`,
//         {
//         params : {
//             apiKey:"76591525894f448bbff6649c0e05a73f",
//         },
//     }
//         );
// setrecipe(response.data);
//     }catch(error){
//         console.error('error fetching recipe details:',error);
//     }
//     setload(false);
// };
// useEffect(()=>{
//     fetchrecipedetails();

// },[recipeid]);

// if(loading) return <div>LOading...</div>
// if(!recipe) return <div>No recipe</div>


//     return (
// <div className="max-w-2xl mx-auto p-6 rounded-lg">
//     <button onClick={goback} className="mb-4 px-4 py-2" >Back to search</button>
//     <h2 className="text-2xl">{recipe.title}</h2>
//     <div className="flex items-center gap-4">
//     <img src={recipe.image} alt={recipe.title} width={200} className="w-32 h-32 object-cover rounded-lg"/>
//     <h3>ingredients:</h3>
//     </div>
//         {recipe.extendedIngredients && recipe.extendedIngredients.length>0 ? (
//         <ul>  
//          {recipe.extendedIngredients.map((ingredient)=>(
//             <li key={ingredient.id}>{ingredient.original}</li>     
//         ))}
//     </ul>
//         ):(
//             <p>No ingredient available</p>
//         )
//     }
//     <h3>instructions:</h3>
//     <div dangerouslySetInnerHTML={{__html:recipe.instructions || "<p>No instructions available</p>"}}/>
// </div>
//     );
// }

// export default Display;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = ({ recipeid, goback }) => {
  const [recipe, setrecipe] = useState(null);
  const [loading, setload] = useState(true);

  const fetchrecipedetails = async () => {
    setload(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeid}/information`,
        {
          params: {
            apiKey: "76591525894f448bbff6649c0e05a73f",
          },
        }
      );
      setrecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
    setload(false);
  };

  useEffect(() => {
    fetchrecipedetails();
  }, [recipeid]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (!recipe) return <div className="text-center">No recipe found</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border">
      <button onClick={goback} className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg">
        Back to Search
      </button>
      <h2 className="text-2xl font-bold text-center">{recipe.title}</h2>
      
      <div className="flex flex-col items-center gap-4 mt-4">
        <img src={recipe.image} alt={recipe.title} className="w-60 h-60 object-cover rounded-lg shadow-md" />
      </div>

      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
        <ul className="list-disc ml-6">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      ) : (
        <p>No ingredients available</p>
      )}

      <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions || "<p>No instructions available</p>" }} className="mt-2" />
    </div>
  );
};

export default Display;
