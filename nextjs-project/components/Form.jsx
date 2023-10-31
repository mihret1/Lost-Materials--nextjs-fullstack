import Link from "next/link"

const Form=({type,post,setPost,submitting,handleSubmit})=>{
    return(
        <section className="w-full  max-w-full flex-start flex-col">
            <h2 className="head_text text-left">
                <span className="blue_gradient">{type} Posts</span>
            </h2>
            <p className="desc text-left max-w-md">
                {type} and share what you get on lost which is not your and make happy other by returning it to the owner  and share this kidness to whole the world
            </p>
            <form 
               onSubmit={handleSubmit}
               className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                    Material Found
                </span>
               </label>
                <textarea 
                   value={post.prompt}
                   onChange={(e)=>setPost({...post,prompt:e.target.value})}
                   placeholder="write what you found"
                   required
                   className="form_textarea"
                
                />

                <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                    Tag { ` `}
                    <span className="font-normal">
                        (#documents,#electronics,#money)
                    </span>
                </span>
               </label>
                <input 
                   value={post.tag}
                   onChange={(e)=>setPost({...post,tag:e.target.value})}
                   placeholder="#tag"
                   required
                   className="form_input"
                
                />
             

            </form>
            
            
            
            </section>
    )
}

export default Form