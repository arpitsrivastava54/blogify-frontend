import axios from "axios";

export async function getBlog(url) {
  const result = (
    await axios.get(
      `https://react-personal-blog-app.onrender.com/api/blog/${url}`
    )
  ).data;
  return result;
}

export async function user(url, data) {
  const result = (
    await axios.post(`https://react-personal-blog-app.onrender.com/api/user/${url}`, data)
  ).data;
  return result;
}
