import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

     // Obtener los GIFs información de carga
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image } // Pasar todas las props del GIF
                        />
                    ))
                }
                
            </div>

        </>
    )
}
