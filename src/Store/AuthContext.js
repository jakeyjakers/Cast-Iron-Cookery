import { useState, useEffect, useCallback, createContext } from "react";

let logOutTimer

const AuthContext = createContext({
    token: '',
    login: () => {},
    logout: () => {},
    userId: null,
})

const calcRemainingTime = (exp) => {
    const currentTime = new Date().getTime()
    const expTime = exp
    const remainingTime = expTime - currentTime
    return remainingTime
}

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedId = localStorage.getItem('userId')

    const remainingTime = calcRemainingTime(storedExp)

    if (remainingTime <= 1000 *60 * 30) {

        localStorage.removeItem('token')
        localStorage.removeItem('exp')
        localStorage.removeItem('userId')
        return null
    }

    return {
        token: storedToken,
        duration: storedExp,
        userId: storedId
    }
}

export const AuthContextProvider = (props) => {
    const localData = getLocalData()

    let initialToken
    let initialId
    if (localData) {
        initialToken = localStorage.token
        initialId = localStorage.userId
    }

    const [token, setToken] = useState(initialToken)
    const [userId, setId] = useState(initialId)

    const logout = useCallback(() => {

        setToken(null)
        setId(null)
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('exp')

        if(logOutTimer) {
            clearTimeout(logOutTimer)
        }
    },[])

    const login = (token, exp, userId) => {
        setToken(token)
        setId(userId)

        localStorage.setItem('token', token)
        localStorage.setItem('exp', exp)
        localStorage.setItem('userId', userId)

        const remainingTime = calcRemainingTime(exp)

        logOutTimer = setTimeout(logout, remainingTime) 
    }

    useEffect(() => {
        if (localData) {
            logOutTimer = setTimeout(logout, localData.duration)
        }
    }, [localData, logout])

    const contextValue = {
        token,
        login,
        logout,
        userId
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext