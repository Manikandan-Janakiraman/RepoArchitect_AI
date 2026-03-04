import React from "react";

const ExplanationViewer = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Project Architecture Explanation
      </h2>

      <section className="mb-4">
        <h3 className="font-semibold">📁 Folder Structure</h3>
        <p>{result.folderStructure}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">🔄 API Flow</h3>
        <p>{result.apiFlow}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">🗄 Database Schema</h3>
        <p>{result.database}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">🔐 Authentication Logic</h3>
        <p>{result.auth}</p>
      </section>

      <section>
        <h3 className="font-semibold">📊 Business Logic</h3>
        <p>{result.businessLogic}</p>
      </section>
    </div>
  );
};

export default ExplanationViewer;