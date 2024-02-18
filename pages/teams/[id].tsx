import { Team } from "@/type"
import axios from "axios"
import Image from "next/image";
import { useRouter } from "next/router"

export default function id ({team}:{team:Team}) {
    const router = useRouter()
    console.log(team);
    
    return(
        <div className="show">
            <div className="container center">
                <div className="showItem width">
                <h3>{team?.name}</h3>
                <p>{team?.fifaCode}</p>
                <img src={team?.flag} alt="" />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}:{params:{id:number}}) => {
    console.log(params);
    
    const {data} = await axios.get(`https://myfakeapi.com/api/football/teams/${params.id}`)
    return{
        props: {
            team: data.Team
        }
    }
}