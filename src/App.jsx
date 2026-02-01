import Header from "./Components/HeaderComponent.jsx";
import Button from "./Components/ButtonComponent.jsx";
import Post from "./Components/PostComponent.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <div className="post-container">
          <Post
            postTitle="Tarmeez Academy"
            postContent="دورات مجانية في البرمجة والتطوير"
          />

          <Post
            postTitle="hello world"
            postContent="This is a hello world post"
          />

          <Post
            postTitle="My second post"
            postContent="This is the content of my second post"
          />
        </div>
        <div className="button-container">
          <Button name="button1">
            <i class="bi bi-stars"></i>
            <i class="bi bi-stars"></i>
            <i class="bi bi-stars"></i>
          </Button>
          <Button name="button2">
            <div>
              <img
                src="https://images.pexels.com/photos/30994370/pexels-photo-30994370.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-30994370.jpg&fm=jpg"
                alt="flower image"
                style={{ width: "50px" }}
              />
            </div>
          </Button>
          <Button name="button3">
            <div>
              <i class="bi bi-stars"></i>
              <i class="bi bi-stars"></i>
              <i class="bi bi-stars"></i>
              <div>
                <img
                  src="https://images.pexels.com/photos/30994370/pexels-photo-30994370.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-30994370.jpg&fm=jpg"
                  alt="flower image"
                  style={{ width: "50px" }}
                />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
