import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Protected({childern , authentication= true }) {

    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        } 

        setLoader(false)
    },[navigate, authStatus, authentication])
  return loader ? <h1>Loading</h1> : <>{childern}</>
}

export default AuthLayout