import React, { useState } from 'react';

const PromptSection = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Prompt:", prompt);
    // later: send prompt to your Node.js API
  };

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Describe Your Dream Space
        </h2>
        <p className="text-gray-600 text-lg">
          Our AI will turn your words into beautiful interior designs in under 5 minutes.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Scandinavian kitchen with white marble"
            className="flex-grow px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Generate
          </button>
        </form>
      </div>
    </section>
  );
};

export default PromptSection;
