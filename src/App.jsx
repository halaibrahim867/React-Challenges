import Header from "./Components/HeaderComponent.jsx";
import Post from "./Components/PostComponent.jsx";
import SideMenu from "./Components/SideMenu.jsx";
import "./App.css";

function App() {
  const posts = [
    {
      id: 1,
      postTitle: "Tarmeez Academy",
      postContent: "دورات مجانية في البرمجة والتطوير",
    },
    {
      id: 2,
      postTitle: "hello world",
      postContent: "This is a hello world post",
    },
    {
      id: 3,
      postTitle: "My second post",
      postContent: "This is the content of my second post",
    },
  ];

  const postList = posts.map((post) => (
    <Post
      key={post.id}
      postTitle={post.postTitle}
      postContent={post.postContent}
    />
  ));
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <div className="post-container">{postList}</div>
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
