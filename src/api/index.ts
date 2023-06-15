import axios from "axios";

import type { Post } from "../entities/post";
import type { User, UserId } from "../entities/user";
import type { Comment } from "../entities/comment";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

type Options = {
  path: string;
  params?: Record<string, string>;
};

const getData = async ({ path, params }: Options): Promise<any> => {
  const urlParams = params ? `?${new URLSearchParams(params)}` : "";
  const response = await axios.get(`${BASE_URL}${path}${urlParams}`);
  return response.data;
};

export const getPosts = async (params: Options["params"]): Promise<Post[]> => {
  return await getData({ path: "posts", params });
};

export const getPostComments = async (postId: number): Promise<Comment[]> => {
  const params = { postId: String(postId) };
  return await getData({ path: "comments", params });
};

export const getUserById = async (userId: UserId): Promise<User> => {
  const [{ id, name, username, email, website, address, phone }, posts] = await Promise.all([
    getData({ path: `users/${userId}` }),
    getPosts({ userId: String(userId) }),
  ]);
  return { id, name, username, email, website, posts, phone, city: address.city };
};
