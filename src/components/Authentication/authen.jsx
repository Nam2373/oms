import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { PATH } from '../../constants/path'

const AuthGuard = ({ children }) => {
    const router = useRouter()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (!router.isReady) {
            return
        }
        if (!accessToken) {
            router.push({
                pathname: PATH.LOGIN,
                query: { returnUrl: router.asPath }
            })
        } else {
            setChecked(true)
        }
    }, [router.isReady])

    if (!checked) {
        return null
    }
    return <>{children}</>
}

export default AuthGuard;