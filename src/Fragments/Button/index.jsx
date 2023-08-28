export const Button = ( { name, type } ) => {
    return(
        <>
            <button className=" w-full border-2 rounded border-none mt-4 h-9 bg-lime-600 text-white font-semibold" type={type}>{name}</button>
        </>
    )
}