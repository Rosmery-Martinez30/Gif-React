import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    // agregar nueva categoria
    const onAddCategory = ( newCategory ) => {

        //evitar duplicados
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Renderiza un Gif por cada categoría */}
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
