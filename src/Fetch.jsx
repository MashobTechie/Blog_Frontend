import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const API = import.meta.env.VITE_API;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(API);
                if (!response.ok) {
                    throw new Error(`HTTP error!! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data);
                setPosts(data.articles || []);
            } catch (e) {
                console.error('Failed to fetch posts:', e);
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [API]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-center">MERN Blog Articles</h1>

            {/* Loading State */}
            {isLoading && <p className="text-center text-blue-500">Loading posts from the API...</p>}

            {/* Error State */}
            {error && (
                <p className="text-center text-red-500">
                    Error: {error || 'Could not load data. Is your backend running?'}
                </p>
            )}

            {/* Articles Grid */}
            {!isLoading && !error && posts.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100"
                        >
                            {post.urlToImage && (
                                <img
                                    src={post.urlToImage}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                        {post.description || post.content || 'No description available.'}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Author: {post.author || 'Unknown'}
                                    </p>
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-blue-600 text-sm font-medium hover:underline"
                                    >
                                        Read full article →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!isLoading && !error && posts.length === 0 && (
                <p className="text-center text-gray-500">
                    No blog posts found. Time to create a new one!
                </p>
            )}
        </div>
    );
};

export default Fetch;
