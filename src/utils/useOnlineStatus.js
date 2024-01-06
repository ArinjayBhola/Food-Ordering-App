import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    // Check if online
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
    }, [])
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, [])

    // onlineStatus(boolean)
    return onlineStatus;
}

export default useOnlineStatus;