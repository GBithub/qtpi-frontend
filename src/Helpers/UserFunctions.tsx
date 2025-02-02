export const isLoggedIn = () => {
    try {
        if (localStorage.getItem("token") === null)
            return false
        else
            return true
    }catch(error) {
        return false
    }
}

export const getToken = () => {
    try{

        return JSON.parse(localStorage.getItem("token") || "")
    } catch {
        return ""
    }
}

export const getRequester = () => {
    return localStorage.getItem("requester")
}

export const getUserFullName = () => {
    return ("Full Name")
}