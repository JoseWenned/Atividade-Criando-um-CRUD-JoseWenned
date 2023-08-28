import { createContext } from "react";
import { Api } from "../services/api";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"

export const TodoContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const { data: list } = useQuery({queryKey: ["item"], queryFn: async () => {
        const { data } = await Api.get("/todo")
        return data
    }})

    const queryClient = useQueryClient()

    const revalidate = () => {
        queryClient.invalidateQueries({ queryKey: ["item"] })
    }

    const createNote = useMutation({
        mutationFn: async (formData) => {
            return await Api.post("/todo", formData)
        },

        onSuccess: revalidate,
    })

    const deletePost = useMutation({
        mutationFn: async (deleteId) => {
            return await Api.delete(`/todo/${deleteId}`)
        },

        onSuccess: () => {
            revalidate()
        }
    })

    return(
       
        <TodoContext.Provider value={ { list, createNote, deletePost } }>

            { children }
            
        </TodoContext.Provider>
      
    )

}