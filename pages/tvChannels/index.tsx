import { Tv } from "@/type"
import axios from "axios"
import Link from "next/link"

export default function tvChannels ({tvChannels}:{tvChannels:Tv}) {
    return(
        <div className="show">
            <div className="container">
                {Array.isArray(tvChannels) && tvChannels?.map(elm => {
                    return(
                        <div className="showItem" key={elm?.id}>
                            <h3>{elm?.name}</h3>
                            <p>{elm?.country}</p>
                            <Link href={`/tvChannels/${elm?.id}`}>See more</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const {data} = await axios.get("https://myfakeapi.com/api/football/tvchannels")

    return {
        props: {
            tvChannels: data.tvchannels
        }
    }
}