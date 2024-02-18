import Link from "next/link"
import { Menu } from "../Menu/Menu"

export const Layout = ({children}:any) => {
    return(
       <div>
            <Menu />
            {children}
       </div>
    )
}