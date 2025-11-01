import axios from "axios";

export default async function Blogpage({ params }: any) {
 
  const {postid} = await params
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postid}`
  );
  
  const data = response.data;

  return (
    <div>
      blog page: {postid}
      <br />
      title : {data.title}
      <br />
      body : {data.body}
    </div>
  );
}
