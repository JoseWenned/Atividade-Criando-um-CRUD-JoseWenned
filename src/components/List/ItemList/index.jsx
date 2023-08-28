import React, { useContext } from "react"
import { TodoContext } from "../../../provider/index"

export const ItemList = () => {

    const { list, deletePost } = useContext(TodoContext)

    return(
        <>
            {list?.map((item) => {
                return(
                    <li className="mt-2" key={item.id}>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1">{item.content}</p>
                        <button className=" w-24 border-2 rounded border-none mt-4 h-9 bg-red-600 text-white font-semibold" onClick={() => deletePost.mutate(item.id)} type="submit">Remove</button>
                    </li>
                )
            })}   
        </>
    )
}