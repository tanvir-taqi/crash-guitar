import { useEffect, useState } from "react"


const useVerified = (email)=>{
    const [verified,setVerified] = useState(false)
    const [verifyLoading , setVerifyLoading] = useState(true)

    useEffect(()=>{
     
        fetch(`https://crash-guitar-server.vercel.app/usersverification?email=${email}`)
        .then(res =>res.json())
        .then(data=> {
            console.log(data.verified);
            setVerifyLoading(false)
            setVerified(data.verified)
        })
    },[email])

    return [verified,verifyLoading]

}

export default useVerified