import { ItemList } from "./ItemList"

export const ListItem = () => {

    return(
        <section className="flex justify-center">
            <ul className="border-2 rounded w-80 h-screen flex-col mx-1.5 mt-4 snap-y px-2 py-1">
                <h2 className="font-bold">List note</h2>

                <ItemList />
            </ul>
        </section>
      
    )

}