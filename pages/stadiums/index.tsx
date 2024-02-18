import { Stadium } from "@/type"
import axios from "axios"
import Link from "next/link";

export default function stadiums ({stadiums}:{stadiums:Stadium}) {
    return (
        <div className="show">
            <div className="container width">
                {Array.isArray(stadiums) && stadiums?.map(elm => {
                    return(
                        <div className="showItem" key={elm?.id}>
                            <h3>{elm?.name}</h3>
                            <p>{elm?.city}</p>
                            <Link href={"/stadiums/" + elm?.id}>See more</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export const getStaticProps = async () => {
    const {data} = await axios.get("https://myfakeapi.com/api/football/stadiums")
    
    return{
        props: {
            stadiums: data.stadiums
        }
    }
}