import React from "react";
import IdCard from "./components/Card";
import './index.css';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 gap-6">

      <h1 className="text-3xl font-bold mb-6">
        Company ID Cards
      </h1>

      <IdCard
        id="EMP-001"
        name="Alice UWINEZA"
        role="Software Engineer"
        department="Engineering"
        avatar="https://images.unsplash.com/photo-1723179343134-634c9eadde39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww"
      />

      <IdCard
        id="EMP-002"
        name="Michael Jackson"
        role="Product Manager"
        department="Product"
        avatar="https://images.unsplash.com/photo-1547619292-870fe4aeadb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww"
      />

      <IdCard
        id="EMP-003"
        name="White Malia"
        role="UI/UX Designer"
        department="Design"
        avatar="https://images.unsplash.com/photo-1716648311202-39020e3b89fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww"
      />

    </div>
  );
}

export default App;