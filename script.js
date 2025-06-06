// Initialize data from localStorage or default data
function getInitialData() {
  const stored = localStorage.getItem('prnxve-cast-data');
  if (stored) {
    return JSON.parse(stored);
  }

  // Default data
  return {
    songs: [
      {
        id: 1,
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        album: "I Love You.",
        duration: "4:00",
        genre: "Alternative",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
      },
      {
        id: 2,
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: "3:53",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-07a.wav"
      },
      {
        id: 3,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        duration: "3:03",
        genre: "Rock",
        coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-10.wav"
      },
      {
        id: 4,
        title: "Ransom",
        artist: "Lil Tecca",
        album: "We Love You Tecca",
        duration: "2:31",
        genre: "Hip Hop",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-28.wav"
      },
      {
        id: 5,
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
      },
      {
        id: 6,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        duration: "2:58",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-07a.wav"
      },
      {
        id: 7,
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        album: "Stay",
        duration: "2:21",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-10.wav"
      },
      {
        id: 8,
        title: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        duration: "3:58",
        genre: "Alternative",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-28.wav"
      },
      {
        id: 9,
        title: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        duration: "3:23",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
      },
      {
        id: 10,
        title: "Industry Baby",
        artist: "Lil Nas X ft. Jack Harlow",
        album: "MONTERO",
        duration: "3:32",
        genre: "Hip Hop",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-07a.wav"
      },
      {
        id: 11,
        title: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        duration: "2:47",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-10.wav"
      },
      {
        id: 12,
        title: "Bad Habit",
        artist: "Steve Lacy",
        album: "Gemini Rights",
        duration: "3:51",
        genre: "Alternative",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-28.wav"
      },
      {
        id: 13,
        title: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights",
        duration: "3:20",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
      },
      {
        id: 14,
        title: "Flowers",
        artist: "Miley Cyrus",
        album: "Endless Summer Vacation",
        duration: "3:20",
        genre: "Pop",
        coverUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-07a.wav"
      },
      {
        id: 15,
        title: "Calm Down",
        artist: "Rema & Selena Gomez",
        album: "Rave & Roses",
        duration: "3:59",
        genre: "Afrobeats",
        coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audioUrl: "https://www.soundjay.com/misc/sounds/beep-10.wav"
      }
    ],
    playlists: [
      {
        id: 1,
        name: "My Favorites",
        description: "All my favorite tracks",
        songCount: 6,
        songs: [1, 2, 3, 5, 9, 11]
      },
      {
        id: 2,
        name: "Chill Vibes",
        description: "Perfect for relaxing",
        songCount: 5,
        songs: [1, 3, 8, 12, 14]
      },
      {
        id: 3,
        name: "Party Hits",
        description: "Get the party started",
        songCount: 4,
        songs: [5, 6, 9, 10]
      }
    ]
  };
}

class MusicApp {
  constructor() {
    const data = getInitialData();
    this.songs = [...data.songs];
    this.playlists = [...data.playlists];
    this.currentSong = null;
    this.currentSongIndex = -1;
    this.isPlaying = false;
    this.currentPage = 'songs';
    this.searchQuery = '';
    this.likedSongs = new Set(JSON.parse(localStorage.getItem('prnxve-cast-liked') || '[]'));

    // Audio elements
    this.audio = document.getElementById('audioPlayer');

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderSongs();
    this.renderPlaylists();
    this.hideLoading();
  }

  setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const page = e.currentTarget.dataset.page;
        this.switchPage(page);
      });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.handleSearch();

        if (this.searchQuery && searchClear) {
          searchClear.style.display = 'block';
        } else if (searchClear) {
          searchClear.style.display = 'none';
        }
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.searchQuery = '';
        searchClear.style.display = 'none';
        this.renderSongs();
      });
    }

    // Player controls
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const likeBtn = document.getElementById('likeBtn');
    const miniPlayPause = document.getElementById('miniPlayPause');

    if (playPauseBtn) playPauseBtn.addEventListener('click', () => this.togglePlay());
    if (prevBtn) prevBtn.addEventListener('click', () => this.previousSong());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSong());
    if (likeBtn) likeBtn.addEventListener('click', () => this.toggleLike());
    if (miniPlayPause) miniPlayPause.addEventListener('click', () => this.togglePlay());

    // Progress bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      progressBar.addEventListener('click', (e) => this.seekTo(e));
    }

    // Audio events
    if (this.audio) {
      this.audio.addEventListener('timeupdate', () => this.updateProgress());
      this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
      this.audio.addEventListener('ended', () => this.nextSong());
      this.audio.addEventListener('error', (e) => console.error('Audio error:', e));
    }

    // Form submissions
    const addSongForm = document.getElementById('addSongForm');
    const createPlaylistForm = document.getElementById('createPlaylistForm');

    if (addSongForm) addSongForm.addEventListener('submit', (e) => this.handleAddSong(e));
    if (createPlaylistForm) createPlaylistForm.addEventListener('submit', (e) => this.handleCreatePlaylist(e));

    // Modal close events
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeAllModals();
      }
    });
  }

  switchPage(page) {
    this.currentPage = page;

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    const navItem = document.querySelector(`[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
    });
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) pageElement.classList.add('active');

    // Handle mini player visibility
    const miniPlayer = document.getElementById('miniPlayer');
    if (miniPlayer) {
      if (page === 'songs' && this.currentSong) {
        miniPlayer.style.display = 'block';
      } else {
        miniPlayer.style.display = 'none';
      }
    }
  }

  handleSearch() {
    if (!this.searchQuery) {
      this.renderSongs();
      return;
    }

    const filteredSongs = this.songs.filter(song => 
      song.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      song.album.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      song.genre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.renderSongs(filteredSongs);
  }

  renderSongs(songsToRender = this.songs) {
    const songsGrid = document.getElementById('songsGrid');
    const noResults = document.getElementById('noResults');

    if (!songsGrid) return;

    if (songsToRender.length === 0) {
      songsGrid.style.display = 'none';
      if (noResults) noResults.style.display = 'block';
      return;
    }

    songsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    songsGrid.innerHTML = songsToRender.map(song => `
      <div class="song-card" onclick="musicApp.playSong(${song.id})">
        <div class="song-card-content">
          <img class="song-artwork" src="${song.coverUrl}" alt="${song.title}">
          <div class="song-info">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
            <div class="song-meta">
              <span class="song-duration">${song.duration}</span>
              <span class="genre-tag">${song.genre}</span>
            </div>
          </div>
          <div class="song-actions">
            <button class="song-action-btn ${this.likedSongs.has(song.id) ? 'liked' : ''}" 
                    onclick="event.stopPropagation(); musicApp.toggleSongLike(${song.id})">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderPlaylists() {
    const playlistsGrid = document.getElementById('playlistsGrid');
    if (!playlistsGrid) return;

    playlistsGrid.innerHTML = this.playlists.map(playlist => `
      <div class="playlist-card" onclick="musicApp.openPlaylist(${playlist.id})">
        <div class="playlist-cover">
          <i class="fas fa-music"></i>
        </div>
        <div class="playlist-info">
          <div class="playlist-name">${playlist.name}</div>
          <div class="playlist-meta">${playlist.songCount} songs</div>
        </div>
      </div>
    `).join('');
  }

  playSong(songId) {
    const song = this.songs.find(s => s.id === songId);
    if (!song) return;

    this.currentSong = song;
    this.currentSongIndex = this.songs.findIndex(s => s.id === songId);

    // Load audio
    if (this.audio) {
      this.audio.src = song.audioUrl;
      this.audio.load();
    }

    // Update UI
    this.updatePlayerUI();
    this.updateMiniPlayer();

    // Show mini player on songs page
    if (this.currentPage === 'songs') {
      const miniPlayer = document.getElementById('miniPlayer');
      if (miniPlayer) miniPlayer.style.display = 'block';
    }

    // Auto-play
    this.play();
  }

  togglePlay() {
    if (!this.currentSong) return;

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (!this.currentSong || !this.audio) return;

    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updatePlayButtons();
    }).catch(e => {
      console.error('Play failed:', e);
    });
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.updatePlayButtons();
    }
  }

  previousSong() {
    if (this.currentSongIndex > 0) {
      this.playSong(this.songs[this.currentSongIndex - 1].id);
    } else {
      this.playSong(this.songs[this.songs.length - 1].id);
    }
  }

  nextSong() {
    if (this.currentSongIndex < this.songs.length - 1) {
      this.playSong(this.songs[this.currentSongIndex + 1].id);
    } else {
      this.playSong(this.songs[0].id);
    }
  }

  updatePlayButtons() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const miniPlayPause = document.getElementById('miniPlayPause');

    const icon = this.isPlaying ? 'fas fa-pause' : 'fas fa-play';

    if (playPauseBtn && playPauseBtn.querySelector('i')) {
      playPauseBtn.querySelector('i').className = icon;
    }
    if (miniPlayPause && miniPlayPause.querySelector('i')) {
      miniPlayPause.querySelector('i').className = icon;
    }
  }

  updatePlayerUI() {
    if (!this.currentSong) return;

    // Update player page
    const playerAlbumArt = document.getElementById('playerAlbumArt');
    const playerSongTitle = document.getElementById('playerSongTitle');
    const playerArtist = document.getElementById('playerArtist');
    const playerGenre = document.getElementById('playerGenre');
    const playerBg = document.getElementById('playerBg');

    if (playerAlbumArt) playerAlbumArt.src = this.currentSong.coverUrl;
    if (playerSongTitle) playerSongTitle.textContent = this.currentSong.title;
    if (playerArtist) playerArtist.textContent = this.currentSong.artist;
    if (playerGenre) playerGenre.textContent = this.currentSong.genre;
    if (playerBg) playerBg.style.backgroundImage = `url(${this.currentSong.coverUrl})`;

    // Update like button
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
      if (this.likedSongs.has(this.currentSong.id)) {
        likeBtn.classList.add('active');
        const icon = likeBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-heart';
      } else {
        likeBtn.classList.remove('active');
        const icon = likeBtn.querySelector('i');
        if (icon) icon.className = 'far fa-heart';
      }
    }
  }

  updateMiniPlayer() {
    if (!this.currentSong) return;

    const miniAlbumArt = document.getElementById('miniAlbumArt');
    const miniSongTitle = document.getElementById('miniSongTitle');
    const miniArtist = document.getElementById('miniArtist');

    if (miniAlbumArt) miniAlbumArt.src = this.currentSong.coverUrl;
    if (miniSongTitle) miniSongTitle.textContent = this.currentSong.title;
    if (miniArtist) miniArtist.textContent = this.currentSong.artist;
  }

  updateProgress() {
    if (!this.audio || !this.audio.duration) return;

    const progress = (this.audio.currentTime / this.audio.duration) * 100;

    // Update main progress bar
    const progressFill = document.getElementById('progressFill');
    const progressHandle = document.getElementById('progressHandle');

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    if (progressHandle) {
      progressHandle.style.left = `${progress}%`;
    }

    // Update mini progress bar
    const miniProgressFill = document.getElementById('miniProgressFill');
    if (miniProgressFill) {
      miniProgressFill.style.width = `${progress}%`;
    }

    // Update time displays
    const currentTime = document.getElementById('currentTime');
    if (currentTime) currentTime.textContent = this.formatTime(this.audio.currentTime);
  }

  updateDuration() {
    if (!this.audio) return;
    const totalTime = document.getElementById('totalTime');
    if (totalTime) totalTime.textContent = this.formatTime(this.audio.duration);
  }

  seekTo(e) {
    if (!this.audio) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const seekTime = percent * this.audio.duration;

    if (!isNaN(seekTime)) {
      this.audio.currentTime = seekTime;
    }
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  toggleLike() {
    if (!this.currentSong) return;
    this.toggleSongLike(this.currentSong.id);
  }

  toggleSongLike(songId) {
    if (this.likedSongs.has(songId)) {
      this.likedSongs.delete(songId);
    } else {
      this.likedSongs.add(songId);
    }

    this.saveData();

    // Refresh displays
    this.renderSongs();
    if (this.currentSong && this.currentSong.id === songId) {
      this.updatePlayerUI();
    }
  }

  saveData() {
    const data = {
      songs: this.songs,
      playlists: this.playlists
    };
    localStorage.setItem('prnxve-cast-data', JSON.stringify(data));
    localStorage.setItem('prnxve-cast-liked', JSON.stringify([...this.likedSongs]));

    // Try to sync to server but don't break if it fails
    fetch('/api/songs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sync: true, data })
    }).catch(e => console.log('Sync to server failed:', e));
  }

  async handleAddSong(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const songData = {
      id: Date.now(),
      title: formData.get('title') || '',
      artist: formData.get('artist') || '',
      album: formData.get('album') || '',
      duration: formData.get('duration') || '3:00',
      genre: formData.get('genre') || 'Pop',
      coverUrl: formData.get('coverUrl') || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      audioUrl: formData.get('audioUrl') || 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    };

    // Add to local data
    this.songs.push(songData);
    this.saveData();

    // Reset form and close modal
    e.target.reset();
    this.closeAllModals();

    // Refresh display
    this.renderSongs();
  }

  handleCreatePlaylist(e) {
    e.preventDefault();
    
    const formData = new FormData(