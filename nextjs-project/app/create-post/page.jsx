'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"


const CreatePost=()=>{
    const [submitting,setSubmiting]=useState(false)
    const [post,setPost]=useState({
        prompt:'',
        tag:''
    })

    const createPost=async(e)=>{
          e.preventDefault()
          setSubmiting(true)

          try{
            const response=await fetch('/api/prompt/new',
            {
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    tag:post.tag,
                    userId:session?.user.id
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
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPost}
            
            />
        </div>
    )
}


export default CreatePost