import React from 'react'
import { useNavigate } from 'react-router'
import {Button, RTE, Input,Select} from '../index'
import { useSelector } from 'react-redux'
import { service } from '../../appwrite/config'
import { useForm } from 'react-hook-form'


function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues :{
            title : post?.title || "",
            slug : post?.slug || "",
            content : post?.content ||"",
            status : post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const userdata = useSelector(state=> state.auth.userData)

    const submit = async (data)=>{
      if(post){
        const file = data.image[0] ? service.uploadFile(data.image[0]) : null

        if(file){
          service.deleteFile(post.featuredImg)
        }

        const dbPost = await service.updatePost(post.$id,{
          ...data,
          featuredImg : file ? file.$id : undefined
        })
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }else{
        const file = data.image[0] ? service.uploadFile(data.image[0]): null
        if(file){
          const fileId = file.$id
          data.featuredImg = fileId
          const dbPost = await service.createPost({
            ...data,
            userId : userdata.$id
          })
          if(dbPost){
            navigate(`/post/${dbPost.$id}`)
          }
        }
      }
    }
  return (
    <div>PostForm</div>
  )
}

export default PostForm