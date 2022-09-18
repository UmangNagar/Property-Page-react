import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";
function App() {
  return (
  <>
 
  <main className="Container shadow-lg">
  <div className="Navigation shadow-lg p-3 mb-5 rounded">
   <Sidebar/>
  </div>
   <div className="tab">
   <Tables/>
   </div>
  </main>
 
</>
  );
}

export default App;
