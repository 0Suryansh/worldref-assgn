import React from "react";
import styles from './Header.module.css'
import Image from "next/image";
import worldref from "@/public/worldref.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authConfig } from "@/utils/auth";
import LogoutButton from "../logoutButton/LogoutButton";

const Header = async () => {
    const session = await getServerSession(authConfig);


    return(
        <div className={styles.header__wrapper}>
            <Link href="/home">
                <Image src={worldref} alt="App Logo" width={100} height={25} />
            </Link>
            <div>
                <Link className={[styles.header__menuItems, styles.menu_gap].join(" ")} href="/contact">Contact</Link>
                <Link className={[styles.header__menuItems, styles.menu_gap].join(" ")} href="/blogs">Blogs</Link>
                {session && 
                    <>
                    <LogoutButton/>
                    <Image src={session.user?.image!} alt="App Logo" width={30} height={30} style={{marginLeft: 20}} />
                    </>

                    
                }
            </div>
        </div>
    )
}

export default Header