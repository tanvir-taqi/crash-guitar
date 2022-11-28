import { useEffect, useState } from "react"


const useRole = (email) =>{

    const [role, setRole] = useState('')
    const [roleLoading, setRoleLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://crash-guitar-server.vercel.app/users?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setRole(data.role)
            setRoleLoading(false)
        })
        .catch(err => console.log(err)) 
    },[email])

    return [role , roleLoading]
}

export default useRole