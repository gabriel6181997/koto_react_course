import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import styles from "src/components/Main/Main.module.css";

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page} />
      <Links />
    </main>
  );
};
