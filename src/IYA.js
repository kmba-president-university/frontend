import React from "react";
import Navbar from "./Navbar";
import { DiscussionEmbed } from 'disqus-react';

const IYA = () => {
  const article = {
    url: "http://example.com/article-1",
    id: "article-1",
    title: "IYA Session"
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('./components/Background.jpg')" }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="mb-8">A place where you can voice your criticism and suggestions for KMB Ashokavardhana.</p>
        <DiscussionEmbed
          shortname='kmba-1'
          config={{
            url: article.url,
            identifier: article.id,
            title: article.title,
            language: 'en'
          }}
        />
      </div>
    </div>
  );
};

export default IYA;
