import axios from "axios";
async function module(user_id) {
  try {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    console.log("user", user);
    console.log("posts", posts);
  } catch (error) {
    console.log(error);
  }
}

export default module;
