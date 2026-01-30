'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Song, RoundSetting } from '../interface';
import DisplayAll from './DisplayAllSongs';

// Helper to ensure songs have id field
const ensureIds = (songs: any[]): Song[] => {
  return songs.map((song, index) => ({
    ...song,
    id: song.id || `${song.title}-${song.diff}-${index}`,
    isDx: String(song.isDx)
  }));
};

// Pool file mapping - same as main page
const POOL_FILES: Record<string, string> = {
  newbieQuarter: '/pools/N1 - newbieQuarter.json',
  newbieSemi: '/pools/N2 - newbieSemi.json',
  newbieFinals: '/pools/N3 - newbieFinals.json',
  proFemaleSemi: '/pools/PF1 - proFemaleSemi.json',
  proFemaleFinals: '/pools/PF2 - proFemaleFinals.json',
  proMaleSemi: '/pools/PM1 - proMaleSemi.json',
  proMaleFinals: '/pools/PM2 - proMaleFinals.json',
  top32: '/pools/top32.json',
};

const POOL_OPTIONS = [
  { id: 'newbieQuarter', name: 'Bán chuyên - Tứ kết', file: 'N1 - newbieQuarter.json' },
  { id: 'newbieSemi', name: 'Bán chuyên - Bán kết', file: 'N2 - newbieSemi.json' },
  { id: 'newbieFinals', name: 'Bán chuyên - Chung kết', file: 'N3 - newbieFinals.json' },
  { id: 'proFemaleSemi', name: 'Chuyên nữ - Bán kết', file: 'PF1 - proFemaleSemi.json' },
  { id: 'proFemaleFinals', name: 'Chuyên nữ - Chung kết', file: 'PF2 - proFemaleFinals.json' },
  { id: 'proMaleSemi', name: 'Chuyên nam - Bán kết', file: 'PM1 - proMaleSemi.json' },
  { id: 'proMaleFinals', name: 'Chuyên nam - Chung kết', file: 'PM2 - proMaleFinals.json' },
  { id: 'top32', name: 'Top 32 (Custom)', file: 'top32.json' },
];

export default function SongSelector() {
  const router = useRouter();

  // Selected pool - sync with localStorage
  const [selectedPool, setSelectedPool] = useState('newbieSemi');
  const [songData, setSongData] = useState<Song[]>([]);
  const [isLoadingPool, setIsLoadingPool] = useState(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Load selected pool from localStorage on mount
  useEffect(() => {
    const savedPool = localStorage.getItem('selectedPool');
    if (savedPool && POOL_FILES[savedPool]) {
      setSelectedPool(savedPool);
    }
  }, []);

  // Save selected pool to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedPool', selectedPool);
  }, [selectedPool]);

  // Load pool data when selected pool changes
  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const loadPool = async () => {
      setIsLoadingPool(true);
      const poolFile = POOL_FILES[selectedPool];

      if (!poolFile) {
        console.error('Unknown pool:', selectedPool);
        setSelectedPool('newbieSemi');
        return;
      }

      try {
        const res = await fetch(`${poolFile}?t=${Date.now()}`, {
          signal: abortController.signal,
          cache: 'no-store'
        });

        if (!res.ok) {
          throw new Error(`Failed to load ${poolFile}`);
        }

        const data = await res.json();

        if (!abortController.signal.aborted) {
          setSongData(ensureIds(data));
          console.log(`Pool loaded: ${selectedPool}, songs: ${data.length}`);
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          return;
        }
        console.error('Error loading pool:', error);
        if (selectedPool !== 'newbieSemi') {
          setSelectedPool('newbieSemi');
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoadingPool(false);
        }
      }
    };

    loadPool();

    return () => {
      abortController.abort();
    };
  }, [selectedPool]);

  const handlePoolChange = (poolId: string) => {
    setSelectedPool(poolId);
  };

  const handleAddSong = (song: Song) => {
    // Add the song to current pool data
    setSongData(prev => [...prev, song]);
  };

  const handleDeleteSong = (songId: string) => {
    // Remove the song from current pool data
    setSongData(prev => prev.filter(s => s.id !== songId));
  };

  const handleEditSong = (updatedSong: Song) => {
    // Update the song in current pool data
    setSongData(prev => prev.map(s => s.id === updatedSong.id ? updatedSong : s));
  };

  return (
    <main className="min-h-screen relative">
      <iframe
        src="/assets/prism+.html"
        className="fixed inset-0 w-full h-full border-0"
        style={{
          zIndex: -1,
          pointerEvents: 'none'
        }}
        title="background"
      />

      {isLoadingPool ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white text-xl">Loading pool...</div>
        </div>
      ) : (
        <DisplayAll
          pool={songData}
          selectCount={12}
          selectedPoolId={selectedPool}
          poolFile={POOL_FILES[selectedPool]}
          onPoolChange={handlePoolChange}
          poolOptions={POOL_OPTIONS}
          onAddSong={handleAddSong}
          onDeleteSong={handleDeleteSong}
          onEditSong={handleEditSong}
        />
      )}
    </main>
  );
}
