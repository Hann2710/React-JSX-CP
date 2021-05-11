import "./App.css";
import CatPhoto from "./Cat1.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className={"title red"}>
          <u>Your name here</u>
        </h1>
        <br />
        <img style={{ width: "400px" }} src={CatPhoto} alt="Cat" />
        <br />
        <img src="/squirrel.jpg" alt="squirrel" />
      </div>
      <video width="320" height="240" controls>
        <source src="/SCARY.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
