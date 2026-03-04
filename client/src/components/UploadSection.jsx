import React, { useState } from "react";
import { analyzeCode } from "../api";

const UploadSection = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return alert("Upload ZIP file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const { data } = await analyzeCode(formData);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Upload MERN Project ZIP</h2>
      <input
        type="file"
        accept=".zip"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>
    </div>
  );
};

export default UploadSection;