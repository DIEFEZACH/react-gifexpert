import { useState } from "react"
import { AddCategory,GifGrids } from "./components";

export const  GitExpertApp = () =>{

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);
    
    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory))return;
        // console.log(newCategory);

        // setCategories(categories.concat('Valorant'));
        setCategories([newCategory, ...categories]);
        // setCategories(cat => ([...cat, 'Valorant']));
    }

    return(
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={event =>onAddCategory(event)}

            />

            {/* listado de gif */}
            
            { 
                categories.map( (category) => ( 
                    <GifGrids 
                            key={category}
                            category={category}

                /> ))           
            }
                {/* <li>Abc</li> */}
            
                {/* gif item */}

        </>
    )
}