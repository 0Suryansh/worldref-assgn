import Image from "next/image";
import styles from "./page.module.css";
import {
  GoogleSignInButton,
} from "./components/authButton/AuthButton";
import { getServerSession } from "next-auth";
import { authConfig } from "@/utils/auth";
import { redirect } from "next/navigation";
import Header from "./components/header/Header";

export default async function SignInPage() {

  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/home");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="./next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div>
          <p>Sign in here to enter the app.</p>
          <GoogleSignInButton />
        </div>
      </main>
    </>
  );
}