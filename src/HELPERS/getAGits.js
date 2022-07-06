



//FUNCION QUE LLAMA AL API
 export 
 const getGifs = async(category)=> {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=38gkTOzffjT6mXU9BnTptn8A1aDHjtXv&q=${category}&limit=10`
    const reply = await fetch(url);
    const {data} = await reply.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

       
    }))
    console.log(gifs)
    return gifs
}