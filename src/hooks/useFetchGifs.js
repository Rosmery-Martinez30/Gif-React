import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    // estado para las imagenes obtenidas
    const [images, setImages] = useState([]);


    //está cargando
    const [isLoading, setIsLoading] = useState( true );

      // Función que obtiene las imagenes usando getgifs
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
     // se ejecuta una sola vez al montar el component
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
