import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1 className="text-indigo-600 text-bold text-5xl font-bold">GitExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />
         
            
                {
                    categories.map((category) => (

                        <GifGrid key={category} category={category} />


                    )
                    )
                }
            
        </>
    )
}
