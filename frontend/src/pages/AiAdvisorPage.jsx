import { useState } from "react";

function AiAdvisorPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`Based on this job description, here are some resume tips:
                1. Highlight your experience with java and spring boot prominently.
                2. Mention any REST API projects you have built
                3. Add keywords like "microservices", "JWT", "PostgreSQL", to match the job.
                4. Quantity your achievements - e.g "reduced API response time by 30%".
                5. Include a Github link with active projects.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          AI Resume Advisor
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Paste a job description and get started and get tailored resume tips
          powered by Gemini AI
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Job description
            </label>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the full job description here..."
              rows={8}
              className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus: ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!jobDescription || loading}
            className="bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "Get Resume Tips"}
          </button>
        </form>

        {result && (
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              AI Suggestions
            </h2>
            <p className="text-sm text-gray-600 white-pre-line leading-relaxed">
              {" "}
              {result}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiAdvisorPage;
