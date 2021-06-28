import styles from "src/components/Links/Links.module.css";

export const Links = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a href={item.href} className={styles.card} key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
