import { loginIsRequiredServer } from "@/utils/auth";
import styles from '../page.module.css'
import Header from "../../components/header/Header";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/modal/Modal";

export default async function Page() {
  await loginIsRequiredServer();


  return (
    <>
      <Header />
      <div>
        <h2 className={styles.home__head}>Dashboard/Settings Page</h2>
      </div>
      <div className={styles.home_main}>
          <Link href="/home/settings/password">
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlurrD7mBPPNc8ctyFp0SwtkNTlyZn80FrUCo-nhZKQ&s"} alt="" width={400} height={200}/>
          </Link>
          <Link href="/home/settings/profile">
          <Image src={"https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"} alt="" width={400} height={200}/>
          </Link>
        </div>
        <div style={{textAlign: "center", marginTop: "2rem"}}>
        <Modal text="This modal is opened from Settings page"/>
      </div>
    </>
  );
}