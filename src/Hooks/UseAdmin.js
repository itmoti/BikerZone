import { useEffect, useState } from "react";

const UseAdmin = email => {
    const [isAdmin, setIsSeller] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://bikezone-serverside-itmoti.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsSeller(data.IsAdmin)

                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]
}

export default UseAdmin;