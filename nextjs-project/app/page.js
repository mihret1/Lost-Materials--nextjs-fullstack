
import Feed from "@components/Feed"

const Home=()=>{
  return(
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center"> 
        Find and share
        <br className=" max-md:hidden" />
        <span className="orange_gradient text-center">
          All Lost Materials
        </span>
      </h1>
      <p className="desc text-center">
        Lost Materials is website that everyone share what he get from lost honestly and
        many ones find their losted materials and back to their happiness
      </p>
      <Feed />
    </section>
  )
}

export default Home
