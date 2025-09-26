import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      {/* <main className="p-6 flex flex-col items-center gap-6">
        <Card title="Flowbite Card" description="This is a dark/light mode card." />
        <Button onClick={() => alert("Clicked!")}>Click Me</Button>
      </main> */}
    </div>
  );
}

export default App;
