import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-8 px-4">
      <div className="text-center mb-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhancer</h1>
      <p className="text-lg text-gray-500">Upload your image and let AI enhance to in seconds!</p>
      </div>
      <Home />

      <div className="mt-5">Powered by ©Lucifer</div>
    </div>
  );
}

export default App;
