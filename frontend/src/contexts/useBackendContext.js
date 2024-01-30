import { useContext } from "react"
import { BackendContext } from './BackendContext'


export const useBackendDetail = () => {
    const context = useContext(BackendContext)
    if (context === undefined)
    {
        throw new Error("useBackendDetail must be used within a BackedDetailProvider")
    }
    return context
}