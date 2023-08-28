import { useForm } from "react-hook-form";
import { Button } from "../../Fragments/Button"
import { useContext } from "react"
import { TodoContext } from "../../provider"

export const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm()

    const { createNote } = useContext(TodoContext)

    const submit = (formData) => {

        createNote.mutate(formData)
        reset()

    }

    return(
        <section className="flex justify-center">
                <form className="border-2 w-80 rounded h-52 flex-col mx-1.5 mt-3.5 px-2 py-1" onSubmit={handleSubmit(submit)}>
                    
                    <div className="mt-1">
                        <label className="font-semibold" htmlFor={"name"}>Name note</label>
                        <input 
                            className="w-full border-2 rounded border-none mt-1 px-1 py-1 bg-slate-300"

                            id="name"
                            type={"text"} 
                            placeholder={"Name your note"} 
                            {...register("title")}
                            required={true}

                        />
                    </div>

                    <div className="mt-1">
                        <label className="font-semibold" htmlFor={"note"}>Register Note</label>
                        <input 
                            className="w-full border-2 rounded border-none mt-1 px-1 py-1 bg-slate-300 "

                            id="note"
                            type={"text"} 
                            placeholder={"Register your note"}
                            {...register("content")}
                            required={true}

                        />
                    </div>
                    
                    <Button type={"submit"} name={"Register"}/>
                </form>
        </section>
    )

}