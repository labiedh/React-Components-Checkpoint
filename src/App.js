import logo from './logo.svg';
import './App.css';
import './style.css';
import myImageSRC from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title">Your name here</h1>
        <br />
        <img src={myImageSRC} alt="SRC" />
        <br />
        <img src="/imageInPublic.jpg"  alt="Public" / >
      </div>
      
      <video width="320" height="240" controls>
        <source src="./source/myVideo.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default App;
