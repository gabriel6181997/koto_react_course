import { Headline } from "./Headline";
import { Links } from "./Links";
import styles from "../styles/Home.module.css";

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page} />
      <Links />
    </main>
  );
};
