import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";
import { usePost } from "src/hooks/usePost";

const PostsId = () => {
  const { post, user, error, isLoading } = usePost();

  console.log({post, user, error, isLoading });

  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
