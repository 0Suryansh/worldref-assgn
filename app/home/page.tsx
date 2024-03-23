import { authConfig, loginIsRequiredServer } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Header from "../components/header/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import Modal from "../components/modal/Modal";
import Data from "../data/Data";
const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  await loginIsRequiredServer();

  const session = await getServerSession(authConfig);


  await wait(1000);

  return (
    <>
      <Header />
      <div>
        <h2 className={styles.home__head}>Dummy Dashboard</h2>
        <div className={styles.home_main}>
          <Link href="/home/analytics">
          <Image src={"https://successive.cloud/wp-content/uploads/2022/04/Data-Analytics-Benefits.png"} alt="" width={400} height={200}/>
          </Link>
          <Link href="/home/settings">
          <Image src={"https://play-lh.googleusercontent.com/zAboa4aVE6Ix_c8Lae_5SfY-eI3dpOdJnj8amk-HyRFjnCDSaBRCJCOmySeteE4fAyg"} alt="" width={400} height={200}/>
          </Link>
        </div>
      </div>
      <div className={styles.modalBtnPlacement}>
        <Modal text="This modal is opened from Home Page"/>
      </div>
      <Data/>
    </>
  );
}