import React, { useState } from "react";
import UploadSection from "../components/UploadSection";
import ExplanationViewer from "../components/ExplanationViewer";

const Dashboard = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">
        AI Codebase Explainer
      </h1>
      <UploadSection setResult={setResult} />
      <ExplanationViewer result={result} />
    </div>
  );
};

export default Dashboard;