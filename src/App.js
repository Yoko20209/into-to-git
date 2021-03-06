import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [state, setState] = useState(0);
  const [pullUpstream, setPullUpstream] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //0 
  //fork 1
  //clone 2
  //add ribbon 3
  //add whiskers 4
  //push 5
  //pull request 6
  //merge 7
  //Yoko added more features 8
  //add remote upstream => fetch 9 || pull 10
  //merge 10
  //push 11

  // useEffect(()=>{console.log(state)},[state])

  function undoOneStep(){
    if(state === 8 && !buttonDisabled){
      return setButtonDisabled(true);
    }
    if (pullUpstream){
      setPullUpstream(false);
      return setState(8);
    } 
    if (state > 0) setState(state - 1);
  }

  function addFeature(){
    if(state >= 4) return;
    setState(state + 1);
  }

  function toggleButton(){
    setButtonDisabled(!buttonDisabled);
  }

  return (
    <div className="App">
      <nav id="nav">
        <div id="fixed">
          <button className="button" onClick={()=>{setState(0)}}>Restart</button>

          <button className="button" onClick={undoOneStep}>Undo one step</button>

      </div>
        {state === 0
          ? <button className="button" onClick={()=>{setState(1)}}>Fork</button>
          :state === 1 
          ? <button className="button" onClick={()=>{setState(2)}}>git clone</button>
          : state <= 3
          ? <button className="button" onClick={addFeature}>Add a feature and git commit</button>
          : state === 4
          ? <button className="button" onClick={()=>{setState(5)}}>git push</button>
          : state === 5
          ? <button className="button" onClick={()=>{setState(6)}}>Make Pull Request</button>
          : state === 6
          ? <button className="button" onClick={()=>{setState(7)}}>Merge</button>
          : state === 7
          ? <button className="button" onClick={()=>{setState(8)}}>Yoko added more features</button>
          : state === 8
          ?<>
          <button className="button" disabled={buttonDisabled} onClick={()=>{setState(9)}}>git fetch</button>
          <button className="button" disabled={buttonDisabled} onClick={()=>{
            setPullUpstream(true);
            setState(10)
          }}>git pull upstream</button>
          <button className="button" disabled={!buttonDisabled} onClick={toggleButton}>git add remote upstream</button>
          </>
          : state === 9
          ? <button className="button" onClick={()=>{setState(10)}}>git merge</button>
          : state === 10
          ? <button className="button" onClick={()=>{setState(11)}}>git push</button>
          :<div id="placeholder"></div>}

      </nav>


      <article className="App-header">


        <div className="repo" id="YokoRepository">Yoko's repository<br></br>on <strong>GitHub</strong><br></br>
          {state < 6
          ? <img src="biggerears.png" className="biggerears" alt="biggerears" /> 
          : state === 6
          ? <><img src="biggerears.png" className="biggerears" alt="biggerears" /> <br></br>
          <p>Pull Request! <br></br>"Please merge <br></br>Becky's repo"</p></>
          : state === 7
          ?<img src="whiskers.png" className="whiskers" alt="whiskers" />
          : state >= 8
          ? <img src="bodyandribbon.png" className="bodyandribbon" alt="bodyandribbon" />
          : <></>}
       

          
        </div>
        
        <div className="repo" id="BeckyRepository">
          Becky's repository<br></br>on<strong> GitHub</strong><br></br>
            {
              state >= 1 && state < 5
              ? <img src="biggerears.png" className="biggerears" alt="biggerears" />
              : state >= 5 && state < 11
              ? <img src="whiskers.png" className="whiskers" alt="whiskers" />
              : state >= 11
              ? <img src="bodyandribbon.png" className="bodyandribbon" alt="bodyandribbon" />
              :<></>
            }
        </div>
        


        <div className="repo" id="BeckyRepositoryOnPC">
          Becky's repository<br></br> on <strong>PC</strong><br></br>
          {state === 2
          ?   <img src="biggerears.png" className="biggerears" alt="biggerears" />
          :state === 3
            ?  <img src="ribbon.png" className="ribbon" alt="ribbon" />
            : state >= 4 && state < 9
            ?<img src="whiskers.png" className="whiskers" alt="whiskers" />
            : state === 9
            ? <><img src="whiskers.png" className="whiskers" alt="whiskers" /><br></br><br></br><img src="bodyandribbon.png" className="bodyandribbon" alt="bodyandribbon" /></>
            : state >= 10 
            ?<img src="bodyandribbon.png" className="bodyandribbon" alt="bodyandribbon" />
            :<></>}
        </div>
      </article>
      <a href="https://github.com/Yoko20209/intro-to-git.git" id="github_link">Link to GitHub repsitory of this page</a>
    </div>
  );
}

export default App;
