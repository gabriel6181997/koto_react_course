import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "src/utils/fetcher";

export const useUser = () => {
  const router = useRouter();

  const { data: user, error: userError } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${router.query.id}`,
    fetcher
  );

  return {
    user,
    error: userError,
    isLoading: !user && !userError,
  };
};
