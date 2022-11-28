import { useEffect, useState } from "react"


const useRole =(email)=>{
    const [role, setRole] = useState('')
    const [roleLoading, setRoleLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            
            setRole(data.role)
            setRoleLoading(false)
        })
        .catch(err => console.log(err))
        
    },[email])

    return [role , roleLoading]
}

export default useRole