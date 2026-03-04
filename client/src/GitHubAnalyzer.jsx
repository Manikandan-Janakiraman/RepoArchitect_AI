// import { useState } from "react";
// import axios from "axios";

// export default function GitHubAnalyzer() {
//   const [url, setUrl] = useState("");
//   const [analysis, setAnalysis] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   /* ===============================
//      Recursive Tree Renderer (collapsible)
//   =============================== */
//   const renderTree = (nodes) => {
//     if (!nodes) return null;

//     return nodes.map((node, index) => {
//       const [open, setOpen] = useState(false);
//       return (
//         <div key={index} className="pl-4 py-0.5">
//           {node.type === "folder" ? (
//             <div
//               className="cursor-pointer hover:text-yellow-400"
//               onClick={() => setOpen(!open)}
//             >
//               📁 {node.name}
//             </div>
//           ) : (
//             <div>📄 {node.name}</div>
//           )}
//           {open && node.children && renderTree(node.children)}
//         </div>
//       );
//     });
//   };

//   /* ===============================
//      Analyze Button
//   =============================== */
//   const handleAnalyze = async () => {
//     if (!url.trim()) {
//       setError("Please enter a GitHub repository URL");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");
//       setAnalysis(null);

//       const response = await axios.post(
//         "http://localhost:5000/api/analyze",
//         { repoUrl: url },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       setAnalysis(response.data);
//     } catch (err) {
//       console.error("Frontend Error:", err);

//       if (err.response) {
//         setError(
//           err.response.data?.error ||
//             err.response.data?.details ||
//             "Backend returned an error"
//         );
//       } else if (err.request) {
//         setError("Server not responding. Is backend running?");
//       } else {
//         setError("Something went wrong");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ===============================
//      Toggle Mode
//   =============================== */
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const bgClass = darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900";
//   const cardBg = darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";

//   return (
//     <div className={`${bgClass} min-h-screen p-6 font-sans transition-colors duration-300`}>
//       <div className="flex shadow-xl rounded-2xl overflow-hidden">

//         {/* Sidebar */}
//         <div className={`${darkMode ? "bg-gray-800" : "bg-gray-900"} text-white w-24 flex flex-col items-center py-6 space-y-6`}>
//           <div className="text-3xl font-bold">AI</div>
//           <div className="hover:text-yellow-400 cursor-pointer transition">📁</div>
//           <div className="hover:text-yellow-400 cursor-pointer transition">⚙️</div>
//           <div className="hover:text-yellow-400 cursor-pointer transition">🗄</div>
//           <div className="hover:text-yellow-400 cursor-pointer transition">🔄</div>
//           <div className="hover:text-yellow-400 cursor-pointer transition">🚀</div>
//           <button
//             onClick={toggleDarkMode}
//             className="mt-auto px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded font-semibold text-sm"
//           >
//             {darkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-8 space-y-6">

//           {/* Header */}
//           <div className="flex justify-between items-center">
//             <h1 className="text-4xl font-bold">AI Codebase Dashboard</h1>
//             <div className="flex items-center space-x-3">
//               <input
//                 type="text"
//                 placeholder="Paste GitHub Repository URL..."
//                 className={`px-4 py-2 border rounded-full w-96 focus:ring-2 focus:ring-yellow-400 outline-none ${
//                   darkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-300"
//                 }`}
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//               />
//               <button
//                 onClick={handleAnalyze}
//                 disabled={loading}
//                 className={`px-6 py-2 rounded-full font-semibold transition ${
//                   loading
//                     ? "bg-gray-500 cursor-not-allowed text-gray-200"
//                     : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
//                 }`}
//               >
//                 {loading ? "Analyzing..." : "Analyze"}
//               </button>
//             </div>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
//           )}

//           {/* Results Grid */}
//           {analysis && (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//               <Card title="Repository Structure" bg={cardBg}>
//                 {renderTree(analysis.structure)}
//               </Card>

//               <Card title="Frontend Structure" bg={cardBg}>
//                 {analysis.frontend?.folderStructure?.map((file, idx) => (
//                   <div key={idx}>📁 {file}</div>
//                 ))}
//               </Card>

//               <Card title="Backend Structure" bg={cardBg}>
//                 {analysis.backend?.folderStructure?.map((file, idx) => (
//                   <div key={idx}>📁 {file}</div>
//                 ))}
//               </Card>

//               <Card title="Database Flow" bg={cardBg}>
//                 <p>🗄 {analysis.database}</p>
//               </Card>

//               <Card title="Frontend Packages" colSpan="md:col-span-2" bg={cardBg}>
//                 {Object.entries(analysis.frontend?.dependencies || {}).map(
//                   ([name, version], idx) => (
//                     <div key={idx}>📦 {name} — {version}</div>
//                   )
//                 )}
//               </Card>

//               <Card title="Backend Packages" bg={cardBg}>
//                 {Object.entries(analysis.backend?.dependencies || {}).map(
//                   ([name, version], idx) => (
//                     <div key={idx}>⚙️ {name} — {version}</div>
//                   )
//                 )}
//               </Card>

//               <Card title="Application Flow" colSpan="md:col-span-3" bg={cardBg}>
//                 <p>🔄 {analysis.flow}</p>
//               </Card>

//               <Card title="Future Improvements" colSpan="md:col-span-3" bg={cardBg}>
//                 <p>🚀 {analysis.futureIdeas}</p>
//               </Card>

//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ===============================
//    Card Component
// ================================ */
// function Card({ title, children, colSpan = "", bg }) {
//   return (
//     <div className={`${bg} rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition ${colSpan}`}>
//       <h2 className="font-bold text-lg mb-4 border-b pb-1">{title}</h2>
//       <div className="text-sm max-h-48 overflow-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//         {children || "No data available"}
//       </div>
//     </div>
//   );
// }




import { useState, useRef } from "react";
import axios from "axios";

export default function GitHubAnalyzer() {
  const [url, setUrl] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Refs for sidebar scrolling
  const repoRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const databaseRef = useRef(null);
  const flowRef = useRef(null);
  const improvementsRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  const renderTree = (nodes) => {
    if (!nodes) return null;
    return nodes.map((node, index) => {
      const [open, setOpen] = useState(false);
      return (
        <div key={index} className="pl-4 py-0.5">
          {node.type === "folder" ? (
            <div
              className="cursor-pointer hover:text-yellow-400"
              onClick={() => setOpen(!open)}
            >
              📁 {node.name}
            </div>
          ) : (
            <div>📄 {node.name}</div>
          )}
          {open && node.children && renderTree(node.children)}
        </div>
      );
    });
  };

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError("Please enter a GitHub repository URL");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setAnalysis(null);
      const response = await axios.post(
        "http://localhost:5000/api/analyze",
        { repoUrl: url },
        { headers: { "Content-Type": "application/json" } }
      );
      setAnalysis(response.data);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setError(err.response.data?.error || "Backend returned an error");
      } else if (err.request) {
        setError("Server not responding. Is backend running?");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const bgClass = darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900";
  const cardBg = darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";

  return (
    <div className={`${bgClass} min-h-screen font-sans transition-colors duration-300`}>
      <div className="flex shadow-xl overflow-hidden">

        {/* Sidebar */}
        {/*  <div className={`${darkMode ? "bg-gray-800" : "bg-gray-900"} text-white w-24 flex flex-col items-center py-8 space-y-6`}>
        <div className="text-3xl font-bold">AI</div>
          <div onClick={() => scrollTo(repoRef)} className="hover:text-yellow-400 cursor-pointer transition">📁</div>
          <div onClick={() => scrollTo(frontendRef)} className="hover:text-yellow-400 cursor-pointer transition">🗂</div>
          <div onClick={() => scrollTo(backendRef)} className="hover:text-yellow-400 cursor-pointer transition">⚙️</div>
          <div onClick={() => scrollTo(databaseRef)} className="hover:text-yellow-400 cursor-pointer transition">🗄</div>
          <div onClick={() => scrollTo(flowRef)} className="hover:text-yellow-400 cursor-pointer transition">🔄</div>
          <div onClick={() => scrollTo(improvementsRef)} className="hover:text-yellow-400 cursor-pointer transition">🚀</div>
         
        </div> */}

        {/* Main Content */}
        <div className="flex-1 space-y-6">

          {/* Header */}
          
            <div className="bg-[url('./assets/search.jpg')] bg-cover bg-center h-screen flex flex-col gap-5 justify-center items-center">
              <h1 className="text-4xl font-bold">RepoArchitect AI</h1>
              <p>Turn Any Repository into a System Blueprint.</p>
              <div className="flex items-center space-x-3">
                
                <input 
                  type="text"
                  placeholder="Paste GitHub Repository URL..."
                  className={`px-4 py-2 border rounded-full w-150 focus:ring-2 focus:ring-yellow-400 outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-300"
                    }`}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className={`px-6 py-2 rounded-full font-semibold transition ${loading
                    ? "bg-gray-500 cursor-not-allowed text-white"
                    : "bg-blue-500 hover:bg-blue-700 text-white"
                    }`}
                >
                  {loading ? "Analyzing..." : "Analyze"}
                </button>
                {/* <button
                  onClick={toggleDarkMode}
                  className={`px-6 py-2 rounded-full font-semibold transition ${loading
                    ? "bg-gray-500 cursor-not-allowed text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button> */}
              </div>


               {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
          )}

          {/* Analysis Results */}
          {analysis && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <Card ref={frontendRef} title="Frontend Structure" bg={cardBg}>
                {analysis.frontend?.folderStructure?.map((file, idx) => (
                  <div key={idx}>📁 {file}</div>
                ))}
              </Card>

              <Card ref={backendRef} title="Backend Structure" bg={cardBg}>
                {analysis.backend?.folderStructure?.map((file, idx) => (
                  <div key={idx}>📁 {file}</div>
                ))}
                {Object.entries(analysis.backend?.dependencies || {}).map(
                  ([name, version], idx) => (
                    <div key={idx}>⚙️ {name} — {version}</div>
                  )
                )}
              </Card>

              <Card ref={databaseRef} title="Database Flow" bg={cardBg}>
                <p>🗄 {analysis.database}</p>
              </Card>

              {/* <Card ref={flowRef} title="Application Flow" colSpan="md:col-span-3" bg={cardBg}>
                <p>🔄 {analysis.flow}</p>
              </Card> */}

              {/* <Card ref={improvementsRef} title="Future Improvements" colSpan="md:col-span-3" bg={cardBg}>
                <p>🚀 {analysis.futureIdeas}</p>
              </Card> */}
              <p className="m-15 t-center"> 2026. All Rights Reserved</p>
            </div>

          )}
            
          </div>

         
        </div>
      </div>
    </div>
  );
}


/* ===============================
   Card Component
================================ */
function Card({ title, children, colSpan = "", bg }) {
  return (
    <div className={`${bg} rounded-2xl shadow-lg p-6 hover:shadow-2xl transition ${colSpan}`}>
      <h2 className="font-bold text-lg mb-4 pb-1">{title}</h2>
      <div className="text-sm max-h-88 overflow-auto whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {children || "No data available"}
      </div>
    </div>
  );
}