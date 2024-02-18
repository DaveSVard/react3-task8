import { Stadium } from "@/type"
import axios from "axios"

export default function id ({stadium}:{stadium:Stadium}) {
    return(
        <div className="show">
            <div className="container center">
                <div className="showItem width">
                    <h3>{stadium?.name}</h3>
                    <p>{stadium?.city}</p>
                    <img src={stadium.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}:{params:{id:number}}) => {
    const {data} = await axios.get("https://myfakeapi.com/api/football/stadiums/" + params.id)
    
    return{
        props:{
            stadium: data.stadium
        }
    }
}