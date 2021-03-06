import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBax";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | MoveIt</title>
      </Head>

      <ExperienceBar />
      <CountDownProvider>
        <section>
          <div>
            <Profile className="profile" />
            <CompletedChallenges />
            <ChallengeBox />
            <CountDown />
          </div>

        </section>
      </CountDownProvider>
    </div>
  );
}
