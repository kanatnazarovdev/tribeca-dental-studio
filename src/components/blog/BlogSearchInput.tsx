'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';

export default function BlogSearchInput({
  lang,
  initialQuery = '',
}: {
  lang: string;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanLang = lang.replace(/\/$/, ''); // Normalize language string
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      // ✅ Explicitly includes trailing slash BEFORE query string for SEO alignment
      router.push(`/${cleanLang}/blog/?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
      router.push(`/${cleanLang}/blog/`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles (e.g. crown sensitivity, dry socket, veneers)..."
          className="w-full bg-neutral-800/80 text-white placeholder-neutral-400 border border-neutral-700 focus:border-[#C5A059] focus:outline-none px-6 py-4 pl-12 pr-24 text-sm font-brandon transition-colors shadow-inner"
        />
        <Search size={18} className="absolute left-4 text-neutral-400 pointer-events-none" />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              const cleanLang = lang.replace(/\/$/, '');
              router.push(`/${cleanLang}/blog/`);
            }}
            className="absolute right-20 p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        )}

        <button
          type="submit"
          className="absolute right-2 bg-[#C5A059] hover:bg-white text-black font-bold uppercase tracking-widest text-[10px] px-4 py-2.5 transition-colors"
        >
          Search
        </button>
      </form> */}
    </div>
  );
}