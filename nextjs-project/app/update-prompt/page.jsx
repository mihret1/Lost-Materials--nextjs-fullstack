'use client'

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter,useSearchParams } from "next/navigation"
import Form from "@components/Form"



const EditPrompt=()=>{
    const router=useRouter()
    // const {data:session}=useSession()
    const [submitting,setSubmiting]=useState(false)
    const searchParams=useSearchParams()
    const promptId=searchParams.get('id')
    
    const [post,setPost]=useState({
        prompt:'',
        tag:''
    })

       useEffect(()=>{
            const getPropmtDetails=async ()=>{
                  const response=await fetch(`/api/prompt/${promptId}`)
                  const data=await response.json()

                  setPost({
                    prompt:data.prompt,
                    tag:data.tag
                  }) } 
                  if(promptId) getPropmtDetails()
                } ,[promptId])


    const updatePrompt=async(e)=>{
          e.preventDefault()
          setSubmiting(true)
           if(!promptId) return alert('propmt is is not found')
          try{
            const response=await fetch(`/api/prompt/${promptId}`,
            {
                method:'PATCH',
                body:JSON.stringify({
                    prompt:post.prompt,
                    tag:post.tag,
                })
            })
            if(response.ok){
                router.push('/')
            }

          }catch(error){
            console.log(error)

          }finally{
            setSubmiting(false)
          }
    }


    return(
        <div>
            <Form 
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            
            />
        </div>
    )
}


export default EditPrompt