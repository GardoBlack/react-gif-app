
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//fUNCTIONAL cOMPONENT
export const GifGrid = ({ category }) => {

    const {images, isLoading}= useFetchGifs(category);
    console.log(isLoading)


    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url}

                        />
                    ))
                }

            </div>

        </>
    )
}

