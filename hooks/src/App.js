import './App.css';
import DataFetching from './Components/GetDataFetching';
import MouseContainer from './Components/MouseContainer';
import UseEffectMouse from './Components/UseEffectMouse';
import UseEffectTimerHook from './Components/UseEffectTimerHook';
import GetDataFetching from './Components/GetDataFetching';
import GetSingleDataFetching from './Components/GetSingleDataFetching';
function App() {
  return (
    <div className="App">
      {/* <CounterHook/> */}
      {/* <CounterPreStateHook/> */}
      {/* <UseStateObjectHook/> */}
      {/* <UseStateArrayHook/> */}
      {/* <UseEffectCounter/> */}
      {/* <UseEffectMouse/> */}
      {/* <MouseContainer/> */}
      {/* <UseEffectTimerHook/> */}
      {/* <GetDataFetching/> */}
      <GetSingleDataFetching/>
    </div>
  );
}

export default App;
