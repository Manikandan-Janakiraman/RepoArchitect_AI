import { useState } from "react";
import search from './assets/search.jpg'

const Home = () => {



    const [url, setUrl] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [analysis, setAnalysis] = useState(null);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const bgClass = darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900";
    const cardBg = darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";

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


    return (
        <>

            <div>
                <div>
                    {/* Main Content */}
                    <div className="flex-1 space-y-6">

                        {/* Header */}

                        <div class="bg-[url('./assets/search.jpg')] bg-cover bg-center h-screen flex justify-center items-center">

                            
                                {/* <h1 className="text-4xl font-bold">AI Codebase Dashboard</h1> */}
                            

                            <div className="flex justify-center items-center space-x-3">
                                <input
                                    type="text"
                                    placeholder="Paste GitHub Repository URL..."
                                    className={`px-4 py-2 border rounded-full w-96 focus:ring-2 focus:ring-yellow-400 outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-white border-gray-300"
                                        }`}
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                                <button
                                    onClick={handleAnalyze}
                                    disabled={loading}
                                    className={`px-6 py-2 rounded-full font-semibold transition ${loading
                                        ? "bg-gray-500 cursor-not-allowed text-gray-200"
                                        : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                                        }`}
                                >
                                    {loading ? "Analyzing..." : "Analyze"}
                                </button>
                                <button
                                    onClick={toggleDarkMode}
                                    className={`px-6 py-2 rounded-full font-semibold transition ${loading
                                        ? "bg-gray-500 cursor-not-allowed text-gray-200"
                                        : "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                                        }`}>
                                    {darkMode ? "Light Mode" : "Dark Mode"}
                                </button>
                            </div></div>

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

                                <Card ref={flowRef} title="Application Flow" colSpan="md:col-span-3" bg={cardBg}>
                                    <p>🔄 {analysis.flow}</p>
                                </Card>

                                <Card ref={improvementsRef} title="Future Improvements" colSpan="md:col-span-3" bg={cardBg}>
                                    <p>🚀 {analysis.futureIdeas}</p>
                                </Card>
                                <p className="m-15 t-center"> 2026. All Rights Reserved</p>
                            </div>

                        )}
                    </div>



                </div>
            </div>

        </>
    )
}

export default Home