import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { useComment } from "src/hooks/useComment";

const CommentsId = () => {
  const { comment, error, isLoading } = useComment();

  console.log({ comment, error, isLoading });

  return (
    <div>
      <Header />
      <Comment />
    </div>
  );
};

export default CommentsId;
