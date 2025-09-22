import React, { useState } from "react";

const AdminPage = () => {
  const [content, setContent] = useState("");
  const [allContent, setAllContent] = useState<string[]>([]);

  const handleUpload = () => {
    const saved = JSON.parse(localStorage.getItem("content") || "[]");
    saved.push(content);
    localStorage.setItem("content", JSON.stringify(saved));
    setAllContent(saved);
    setContent("");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      <button onClick={handleUpload}>Upload</button>

      <h3>All Content:</h3>
      <ul>
        {allContent.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
