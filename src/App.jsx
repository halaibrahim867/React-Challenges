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
          <Post />
          <Post />
          <Post />  
        </div>
        <div className="button-container">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      
      </div>
    </div>
  );
}

export default App;
