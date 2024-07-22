import Link from "next/link"
import "@/styles/navbar.css"

const Navbar = ()=> {
    return (
        <nav>
            <ul className="bg-customDarkGrey flex p-4 space-x-4 text-white">
                <li>
                    <Link className="" href="/">Home</Link>
                </li>

                <li>
                    <Link href="/about">About us</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;