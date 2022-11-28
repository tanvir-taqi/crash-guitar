import { useEffect, useState } from "react"


const useVerified = (email)=>{
    const [verified,setVerified] = useState(false)
    const [verifyLoading , setVerifyLoading] = useState(true)

    useEffect(()=>{
     
        fetch(`http://localhost:5000/usersverification?email=${email}`)
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