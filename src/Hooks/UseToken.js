// import React, { useEffect, useState } from 'react';

// const UseToken = (email) => {
//    const [token , setToken] = useState('')
//    useEffect(() => {
//     console.log('tokkeeen' , email)
//        if(email) {
//         fetch(`https://bikezone-serverside-itmoti.vercel.app/jwt?email=${email}`)
//        .then(res => res.json())
//        .then(data => 
//         {
//             console.log(data)
//             if (data.accessToken) {
//               console.log(data)
//                 localStorage.setItem('accessToken', data.accessToken)
//                 setToken(data.accessToken)
//             }
//         })
//        }
//    },[email])
//    return [token];
// };

// export default UseToken;


import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://bikezone-serverside-itmoti.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;