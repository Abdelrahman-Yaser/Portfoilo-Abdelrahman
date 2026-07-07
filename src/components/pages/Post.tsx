import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

const MEDIUM_USERNAME = 'abdooy640';
// rss2json turns Medium's RSS feed into JSON so it can be fetched from the browser (Medium's
// raw RSS endpoint blocks direct cross-origin requests). Free tier: ~10 requests/hour without
// an API key - for higher traffic, get a free key at https://rss2json.com and append &api_key=...
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

function stripHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

export default function Post() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    let isMounted = true;

    fetch(RSS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.status !== 'ok' || !Array.isArray(data.items)) {
          throw new Error('Invalid RSS response');
        }
        setPosts(data.items);
        setStatus('success');
      })
      .catch((err) => {
        console.error('Failed to load Medium posts:', err);
        if (isMounted) setStatus('error');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Articles I wrote on{' '}
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-medium"
            >
              Medium
            </a>
          </p>
        </div>

        {status === 'loading' && (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-purple-600" size={36} />
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Couldn't load the latest posts right now.
            </p>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              Visit my Medium page instead →
            </a>
          </div>
        )}

        {status === 'success' && posts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-20">
            No posts published yet - check back soon!
          </p>
        )}

        {status === 'success' && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-purple-500/50 transition-all flex flex-col"
              >
                {post.thumbnail && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {stripHtml(post.description)}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                    <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1 text-purple-600 font-semibold">
                      Read <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
