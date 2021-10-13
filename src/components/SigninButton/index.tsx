import { signIn, useSession, signOut } from "next-auth/client";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SigninButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Victória César
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
