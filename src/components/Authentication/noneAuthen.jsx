import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import { PATH } from '../../constants/path'

const NoneAuthen = ({ children }) => {
    const router = useRouter()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if (!router.isReady) {
            return
        }
        if (accessToken) {
            router.push({
                pathname: PATH.HOME
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

export default NoneAuthen;