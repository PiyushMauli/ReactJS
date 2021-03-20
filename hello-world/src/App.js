import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import PropsExample from './Components/PropsEx';

function App() {
  // props in ReactJS
  // ====================
  return (
      <div className="App">
        <PropsExample name="Piyush Jiwane" subname="mauli">
          <p>Thanks for communicating</p>
        </PropsExample>
        <PropsExample name="Gaurav Jiwane" subname="panu">
          <button>Click Here</button>
        </PropsExample>

        <Welcome name="piyush anil jiwane aks Mauli"/>
      </div>
    );

  // class component in ReactJS
  // ===============================
  // return (
  //   <div className="App">
  //     <Welcome/>
  //   </div>
  // );

  // functional components in ReactJs
  // ===================================
  // return (
  //   <div className="App">
  //     <Greet></Greet>
  //   </div>
  // );

  // first hello-world program in ReactJS
  // =========================================
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         <code>Hello Piyush Jiwane</code>
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
