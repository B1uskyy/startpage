import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = query.trim();

    if (!trimmed) return;

    // Regex to check if it looks like a URL
    const urlPattern = /^(https?:\/\/|www\.)[^\s]+$/i;

    const urlEndings = [".no", ".com", ".net"]

    if (urlPattern.test(trimmed) || urlEndings.find(v => trimmed.includes(v))) {
      // If it doesn't start with http(s), prepend it
      const fullUrl = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
      window.location.href = fullUrl;
    } else {
      // Otherwise, perform a search
      const encodedQuery = encodeURIComponent(trimmed);
      window.location.href = `https://kagi.com/search?q=${encodedQuery}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="text-[#f8f8f2] mr-2 font-mono">cd ~</span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
        className=" text-[#f8f8f2] rounded px-2 py-1 font-mono outline-none focus:border-[#555] focus:ring-0 "
      />
    </form>
  );
};

export default SearchBar;

