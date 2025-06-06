const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Helper functions to read/write package.json
function readPackageData() {
  try {
    const packageData = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageData.musicData || { songs: [], playlists: [] };
  } catch (error) {
    console.error('Error reading package.json:', error);
    return { songs: [], playlists: [] };
  }
}

function writePackageData(musicData) {
  try {
    const packageData = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageData.musicData = musicData;
    fs.writeFileSync('package.json', JSON.stringify(packageData, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing package.json:', error);
    return false;
  }
}

// API Routes

// Get all songs
app.get('/api/songs', (req, res) => {
  const data = readPackageData();
  res.json(data.songs);
});

// Add new song
app.post('/api/songs', (req, res) => {
  try {
    const { title, artist, album, duration, genre, coverUrl, audioUrl } = req.body;

    if (!title || !artist || !album || !duration || !genre) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = readPackageData();
    const newSong = {
      id: Date.now(),
      title: title.trim(),
      artist: artist.trim(),
      album: album.trim(),
      duration: duration.trim(),
      genre: genre.trim(),
      coverUrl: coverUrl || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      audioUrl: audioUrl || 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    };

    data.songs.push(newSong);

    if (writePackageData(data)) {
      res.status(201).json(newSong);
    } else {
      res.status(500).json({ error: 'Failed to save song' });
    }
  } catch (error) {
    console.error('Error adding song:', error);
    res.status(500).json({ error: 'Failed to add song' });
  }
});

// Get all playlists
app.get('/api/playlists', (req, res) => {
  const data = readPackageData();
  res.json(data.playlists);
});

// Create new playlist
app.post('/api/playlists', (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Playlist name is required' });
    }

    const data = readPackageData();
    const newPlaylist = {
      id: Date.now(),
      name: name.trim(),
      description: description ? description.trim() : '',
      songs: [],
      songCount: 0
    };

    data.playlists.push(newPlaylist);

    if (writePackageData(data)) {
      res.status(201).json(newPlaylist);
    } else {
      res.status(500).json({ error: 'Failed to save playlist' });
    }
  } catch (error) {
    console.error('Error creating playlist:', error);
    res.status(500).json({ error: 'Failed to create playlist' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎵 PRNXVE CAST Music Server running on port ${PORT}`);
  console.log(`📱 Access your music app at http://localhost:${PORT}`);
});