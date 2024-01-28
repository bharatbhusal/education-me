import { useContext } from "react"
import { UserContext } from "./UserContext"

export const useUserDetail = () => {
    const context = useContext(UserContext)
    if (context === undefined)
    {
        throw new Error("useUserDetail must be used within a UserDetailProvider")
    }
    return context
}