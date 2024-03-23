"use client";

import Image from "next/image";
import googleLogo from "@/public/google.png";
import { signIn } from "next-auth/react";
import styles from './AuthButton.module.css'

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button
      onClick={handleClick}
      className={styles.googleLoginButton}
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className={styles.authBtnText}>Continue with Google</span>
    </button>
  );
}