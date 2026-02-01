import "../css/Post.css";
export default function PostComponent({ postTitle = "No Title", postContent }) {
  return (
    <div className="post">
      <h3>{postTitle}</h3>
      <hr />
      <p>{postContent}</p>
    </div>
  );
}
