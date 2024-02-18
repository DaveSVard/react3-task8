import { Team } from "@/type";
import axios from "axios";
import Link from "next/link";

export default function Home({teams}:{teams:Team}) {
  
  return (
    <div className="show">
      <div className="container">
        {Array.isArray(teams) && teams?.map(elm => {
          return(
            <div className="showItem" key={elm?.id}>
              <h3>{elm?.name}</h3>
              <p>{elm?.fifaCode}</p>
              <Link href={`/teams/${elm?.id}`}>See more</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const {data} = await axios.get("https://myfakeapi.com/api/football/teams")

  return{
    props: {
      teams: data.Teams
    }
  }
}