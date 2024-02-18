import Link from "next/link"
import { useRouter } from "next/router"

export const Menu = () => {
    const router = useRouter()
    return(
        <nav className="menu">
            <ul className="menu-list">
                <li><Link href={"/"} className={router.pathname == "/" ? "active" : ""}>Teams</Link></li>
                <li><Link href={"/stadiums"} className={router.pathname == "/stadiums" ? "active" : ""}>Stadiums</Link></li>
                <li><Link href={"/tvChannels"} className={router.pathname == "/tvChannels" ? "active" : ""}>Tv Channels</Link></li>
            </ul>
        </nav>
    )
}