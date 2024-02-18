import { Tv } from "@/type"
import axios from "axios"

export default function id ({tv}:{tv:Tv}) {
    
    return(
        <div className="show">
            <div className="container center">
                <div className="showItem width">
                    <h3>{tv?.name}</h3>
                    <p>{tv?.country}</p>
                    <p>{tv?.lang}</p>
                    <img src={tv?.icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}:{params:{id:number}}) => {
    const {data} = await axios.get(`https://myfakeapi.com/api/football/tvchannels/${params.id}`)

    return{
        props: {
            tv: data.tvchannel
        }
    }
}