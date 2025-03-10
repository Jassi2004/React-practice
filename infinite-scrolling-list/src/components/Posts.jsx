import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import PixelCard from "./PixelCard";

export default function Posts(){
    const {result} = useContext(AppContext);

    return (
        <div >
          {result.map((post) => (
            <PixelCard
              key={post.id}
              title={post.title}
              body={post.body}
              tags={post.tags}
              likes={post.reactions.likes}
            />
          ))}
        </div>
    )
}