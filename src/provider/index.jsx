import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Api } from "../services/api";

export const TodoContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const [ list, setList ] = useState([])
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        const getRead = async () => {

            try {
                const { data } = await Api.get("/todo")
                setList(data)
            } catch (error) {
                console.log(error)
            }

        }

        getRead()
    }, [])

    const createNote = async (formData) => {

        try {

            const newPost = {
                title: formData.title,
                content: formData.content,
            }

            const { data } = await Api.post("/todo", newPost)

            setList([...list, data])

        } catch (error) {

            console.log(error)

        }

    }

    const deletePost = async (deleteId) => {

        try {

            await Api.delete(`/todo/${deleteId}`)

            const deleteNewPost = list.filter(item => item.id !== deleteId)
            setList(deleteNewPost)

        } catch (error) {

            console.log(error)

        }
    }

    return(
       
        <TodoContext.Provider value={ { list, register, handleSubmit, reset, createNote, deletePost } }>

            { children }
            
        </TodoContext.Provider>
      
    )

}