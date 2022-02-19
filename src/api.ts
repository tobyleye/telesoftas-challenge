const BASE_URL = "https://gorest.co.in";

export async function queryUsers(name:string, page = 1) {
  const data = await fetch(
    `${BASE_URL}/public/v1/users?name=${name}&page=${page}`
  ).then((res) => res.json());
  return data;
}

export async function getUserPosts(userId: string, page = 1) {
  const data = await fetch(
    `${BASE_URL}/public/v1/users/${userId}/posts?page=${page}`
  ).then((res) => res.json());
  return data;
}
