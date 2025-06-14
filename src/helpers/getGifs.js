export const getGifs = async( category ) => {
//contiene la url de los gifs utilizando fetch par hacer peticion con los items
    const url = `https://api.giphy.com/v1/gifs/search?api_key=X4HGlDXRm1tuI4hhQxcS07naFMFFKr6W&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
// map recorre todos y crear una nuevo con los items
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}