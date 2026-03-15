const songsFolder = 'Songs/';
const adsFolder = 'Ads/';
const playsFolder = 'Plays/';
const hostFolder = 'VoiceLines/';
const introFile = 'intro.mp3';

const songs = Array.from({ length: 268 }, (_, i) => `song${i + 1}.mp3`);
const ads = Array.from({ length: 44 }, (_, i) => `ad${i + 1}.mp3`);
const plays = Array.from({ length: 41 }, (_, i) => `play${i + 1}.mp3`);

const preVoiceLines = {
  'song26.mp3': ['voice4.mp3'],
  'song54.mp3': ['voice5.mp3'],
  'song233.mp3': ['voice6.mp3'],
};

const postVoiceLines = {
  'song106.mp3': ['voice3.mp3'],
  'song118.mp3': ['voice1.mp3'],
  'song177.mp3': ['voice2.mp3'],
};

let radioOn = false;
let currentSongCount = 0;
let lastSongPlayed = '';
let playedSongs = [];
let songTitles = {};

const playSeries = [
  ['play1.mp3', 'play2.mp3'], // Curse of the Wendigo
  ['play3.mp3', 'play4.mp3'], // The Beast of Grafton
  ['play5.mp3', 'play6.mp3'], // Who Goes There?
  ['play7.mp3', 'play8.mp3'], // Sideshow Snallygaster
  ['play9.mp3', 'play10.mp3'], // The Mothman Cometh
  ['play11.mp3', 'play12.mp3', 'play13.mp3', 'play14.mp3', 'play15.mp3', 'play16.mp3'], // Heart of Steel
  ['play17.mp3', 'play18.mp3', 'play19.mp3', 'play20.mp3'], // Escape from the 42nd Century
  ['play21.mp3', 'play22.mp3', 'play23.mp3', 'play24.mp3', 'play25.mp3'], // Nuka World Radio Show
  ['play27.mp3', 'play26.mp3', 'play28.mp3', 'play29.mp3'], // Astounding Awesome Tales
  ['play30.mp3', 'play31.mp3', 'play32.mp3', 'play33.mp3', 'play34.mp3'], // A Better Life Underground
  ['play35.mp3', 'play36.mp3', 'play37.mp3', 'play38.mp3', 'play39.mp3', 'play40.mp3', 'play41.mp3'], // Zorbo's Revenge
];

let currentSeries = null;
let nextSeriesIndex = 0;

fetch('song_titles.json')
  .then(res => res.json())
  .then(data => songTitles = data);

let adTitles = { ads: {}, plays: {} };
fetch('ad_titles.json')
  .then(res => res.json())
  .then(data => adTitles = data);

const audioElement = document.getElementById('audio-player');
const volumeSlider = document.getElementById('volumeSlider');

// Restore saved volume
const savedVolume = localStorage.getItem('radioVolume');
if (savedVolume !== null) {
  volumeSlider.value = savedVolume;
}
const nowPlayingDisplay = document.getElementById('now-playing');

const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContextClass();

const sourceNode = audioContext.createMediaElementSource(audioElement);
const bandpass = audioContext.createBiquadFilter();
bandpass.type = 'bandpass';
bandpass.frequency.value = 1000;
bandpass.Q.value = 1;

const distortion = audioContext.createWaveShaper();
distortion.curve = makeDistortionCurve(100);
distortion.oversample = '4x';

const musicGain = audioContext.createGain();
musicGain.gain.value = parseFloat(volumeSlider.value);

const staticGain = audioContext.createGain();
staticGain.gain.value = 0; // Starts off

const staticNoise = createWhiteNoise(audioContext);
staticNoise.connect(staticGain);
staticGain.connect(audioContext.destination);
staticNoise.start();

const voiceDistortion = audioContext.createWaveShaper();
voiceDistortion.curve = makeDistortionCurve(25);
voiceDistortion.oversample = 'none';

const voiceGain = audioContext.createGain();
voiceGain.gain.value = parseFloat(volumeSlider.value);

const splitter = audioContext.createGain();
sourceNode.connect(splitter);

splitter.connect(bandpass);
bandpass.connect(distortion);
distortion.connect(musicGain);
musicGain.connect(audioContext.destination);

splitter.connect(voiceDistortion);
voiceDistortion.connect(voiceGain);
voiceGain.connect(audioContext.destination);

volumeSlider.addEventListener('input', () => {
  const volume = parseFloat(volumeSlider.value);
  musicGain.gain.value = volume;
  voiceGain.gain.value = volume;
  if (radioOn) {
    const baseStatic = 0.001;
    const dynamicStatic = 0.0015;
    staticGain.gain.value = (baseStatic + dynamicStatic * Math.sqrt(volume)) * (1 - volume * 0.3);
  }
  localStorage.setItem('radioVolume', volume);
});

audioElement.addEventListener('ended', () => {
  if (isHost) playNext();
});

window.addEventListener('click', () => {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
});

audioElement.addEventListener('play', () => {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
});

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function playVoiceLine(song, beforeSong = true, callback = playNext) {
  const immersiveMode = document.getElementById('immersiveMode');
  const falloutMode = document.getElementById('falloutMode');
  if (immersiveMode && immersiveMode.checked) {
    setTimeout(callback, 100);
    return;
  }
  // Fallout Mode: Only play voice lines for Fallout songs
  if (falloutMode && falloutMode.checked) {
    const info = songTitles[song];
    const genres = info && info.genre ? info.genre.split(',').map(g => g.trim().toLowerCase()) : [];
    if (!genres.includes('fallout')) {
      setTimeout(callback, 100);
      return;
    }
  }
  const lines = beforeSong ? preVoiceLines[song] || [] : postVoiceLines[song] || [];
  if (lines.length > 0) {
    const nextLine = getRandomItem(lines);
    updateNowPlaying(`Host: ${nextLine}`);
    audioElement.src = hostFolder + nextLine;
    audioElement.onended = callback;
    bandpass.disconnect();
    distortion.disconnect();
    musicGain.disconnect();
    voiceDistortion.disconnect();
    voiceGain.disconnect();
    voiceDistortion.connect(voiceGain);
    voiceGain.connect(audioContext.destination);
    audioElement.play().catch(() => { });
  } else {
    setTimeout(callback, 100);
  }
}

function isImmersiveMode() {
  const immersive = document.getElementById('immersiveMode');
  return immersive && immersive.checked;
}

function isFalloutMode() {
  const fallout = document.getElementById('falloutMode');
  return fallout && fallout.checked;
}

function isAdFreeMode() {
  const adFree = document.getElementById('adFreeMode');
  return adFree && adFree.checked;
}

function isFamilyFriendlyMode() {
  const familyFriendly = document.getElementById('familyFriendlyMode');
  return familyFriendly && familyFriendly.checked;
}

// Example filter for Fallout Mode (songs, ads, plays)
function getFilteredList(list, type) {
  const falloutMode = document.getElementById('falloutMode');
  const familyFriendly = isFamilyFriendlyMode();

  let filtered = list;

  if (familyFriendly && type === 'song') {
    filtered = filtered.filter(item => {
      const info = songTitles[item];
      const genres = info && info.genre ? info.genre.split(',').map(g => g.trim().toLowerCase()) : [];
      return !genres.includes('nsfw');
    });
  }

  if (falloutMode && falloutMode.checked) {
    if (type === 'song') {
      // Only Fallout genre songs
      filtered = filtered.filter(item => {
        const info = songTitles[item];
        const genres = info && info.genre ? info.genre.split(',').map(g => g.trim().toLowerCase()) : [];
        return genres.includes('fallout');
      });
    }
    // Fallout mode does NOT filter ads or plays anymore
  }
  return filtered;
}

// Example usage in your playback logic:
function playNext() {
  if (!radioOn) return;
  let nextSource;
  if (currentSongCount < 2) {
    let unplayedSongs = getFilteredList(songs.filter(song => !playedSongs.includes(song)), 'song');
    if (unplayedSongs.length === 0) {
      playedSongs = [];
      unplayedSongs = getFilteredList([...songs], 'song');
    }
    nextSource = getRandomItem(unplayedSongs);
    lastSongPlayed = nextSource;
    playedSongs.push(nextSource);
    currentSongCount++;
    const displayTitle = songTitles[nextSource] ? songTitles[nextSource].title : nextSource;
    updateNowPlaying(`Now Playing: ${displayTitle}`);

    // Media Session Update
    const songInfo = songTitles[nextSource] || {};
    // Fallback parsing if title contains "by"
    let titleStr = songInfo.title || nextSource;
    let title = titleStr, artist = "Unknown Artist";
    if (titleStr.includes(" by ")) {
      [title, artist] = titleStr.split(" by ");
    }
    updateMediaSession(title, artist);

    audioElement.src = songsFolder + nextSource;
    audioElement.onended = () => playVoiceLine(nextSource, false);
    voiceDistortion.disconnect();
    voiceGain.disconnect();
    bandpass.connect(distortion);
    distortion.connect(musicGain);
    musicGain.connect(audioContext.destination);
    playVoiceLine(nextSource, true, () => {
      audioElement.play().catch(() => { });
    });
  } else {
    if (isAdFreeMode()) {
      currentSongCount = 0;
      playNext();
      return;
    }

    // Logic for selecting next play (Sequential Series)
    if (currentSeries === null) {
      // No series in progress. Decide whether to start one (20% chance) or play an ad (80%)
      if (Math.random() < 0.2) {
        // Start a new series from the first episode
        currentSeries = getRandomItem(playSeries);
        nextSeriesIndex = 0;
        nextSource = currentSeries[nextSeriesIndex];
        nextSeriesIndex++;

        const displayTitle = adTitles.plays[nextSource] ? adTitles.plays[nextSource].title : nextSource;
        updateNowPlaying(`Radio Play: ${displayTitle}`);
        updateMediaSession(displayTitle, "Enlightened Radio");
        audioElement.src = playsFolder + nextSource;
      } else {
        // Play a regular ad
        let adList = getFilteredList(ads, 'ad');
        nextSource = getRandomItem(adList);
        const displayTitle = adTitles.ads[nextSource] ? adTitles.ads[nextSource].title : nextSource;
        updateNowPlaying(`Ad: ${displayTitle}`);
        updateMediaSession(displayTitle, "Enlightened Radio Sponsor");
        audioElement.src = adsFolder + nextSource;
      }
    } else {
      // A series is in progress. ALWAYS play the next episode.
      nextSource = currentSeries[nextSeriesIndex];
      nextSeriesIndex++;

      const displayTitle = adTitles.plays[nextSource] ? adTitles.plays[nextSource].title : nextSource;
      updateNowPlaying(`Radio Play (Continued): ${displayTitle}`);
      updateMediaSession(displayTitle, "Enlightened Radio");
      audioElement.src = playsFolder + nextSource;

      // If we reached the end of the series, reset it.
      if (nextSeriesIndex >= currentSeries.length) {
        currentSeries = null;
        nextSeriesIndex = 0;
      }
    }

    currentSongCount = 0;
    audioElement.onended = playNext;
    voiceDistortion.disconnect();
    voiceGain.disconnect();
    bandpass.connect(distortion);
    distortion.connect(musicGain);
    musicGain.connect(audioContext.destination);
    audioElement.play().catch(() => { });
  }
}

// Example usage for Immersive Mode:
function playIntroduction() {
  const immersiveMode = document.getElementById('immersiveMode');
  if (!radioOn) return;
  if (immersiveMode && immersiveMode.checked) {
    playNext();
    return;
  }
  updateNowPlaying('Welcome to Enlightened Radio');
  updateMediaSession('Welcome to Enlightened Radio', "Host");
  audioElement.src = introFile;
  audioElement.onended = playNext;
  bandpass.disconnect();
  distortion.disconnect();
  musicGain.disconnect();
  voiceDistortion.disconnect();
  voiceGain.disconnect();
  voiceDistortion.connect(voiceGain);
  voiceGain.connect(audioContext.destination);
  audioElement.play().catch(() => { });
}

function updateNowPlaying(text) {
  const nowPlayingDisplay = document.getElementById('now-playing');
  if (nowPlayingDisplay) {
    nowPlayingDisplay.textContent = text;
  }
}

function updateMediaSession(title, artist) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      album: 'Enlightened Radio',
      artwork: [
        { src: 'https://ashhaven.com/images/logo.png', sizes: '512x512', type: 'image/png' }
      ]
    });
  }
}

// Set up Media Session Action Handlers once
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => powerOn());
  navigator.mediaSession.setActionHandler('pause', () => powerOff());
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    if (radioOn) playNext();
  });
}

function makeDistortionCurve(amount) {
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = i * 2 / n_samples - 1;
    curve[i] = (3 + amount) * x * 20 * deg / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

function createWhiteNoise(context) {
  const bufferSize = 2 * context.sampleRate;
  const noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  const whiteNoise = context.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;
  return whiteNoise;
}

let initialized = false;

function initializeRadio() {
  if (!initialized) {
    initialized = true;
    const stateLoaded = loadState();
    if (stateLoaded && audioElement.src) {
      // If state loaded AND we have a source, we are ready to play when powered on
      // We do NOT play automatically here, powerOn handles the resume
    } else {
      playIntroduction();
    }
  }
}


function powerOn() {
  if (radioOn) return;
  radioOn = true;
  audioContext.resume().then(() => {
    const volume = parseFloat(volumeSlider.value);
    const baseStatic = 0.001;
    const dynamicStatic = 0.0015;
    staticGain.gain.value = (baseStatic + dynamicStatic * Math.sqrt(volume)) * (1 - volume * 0.3);
    // Resume static
    // Resume music/audio
    if (audioElement.paused && audioElement.src) {
      let src = audioElement.src;
      if (src) {
        if (src.includes(songsFolder)) {
          const songFile = src.split('/').pop();
          const displayTitle = songTitles[songFile] ? songTitles[songFile].title : songFile;
          updateNowPlaying(`Now Playing: ${displayTitle}`);

          let title = displayTitle, artist = "Unknown Artist";
          if (displayTitle.includes(" by ")) {
            [title, artist] = displayTitle.split(" by ");
          }
          updateMediaSession(title, artist);

          audioElement.onended = () => playVoiceLine(songFile, false);
        } else if (src.includes(adsFolder)) {
          const adFile = src.split('/').pop();
          const displayTitle = adTitles.ads[adFile] ? adTitles.ads[adFile].title : adFile;
          updateNowPlaying(`Ad: ${displayTitle}`);
          updateMediaSession(displayTitle, "Enlightened Radio Sponsor");
          audioElement.onended = playNext;
        } else if (src.includes(playsFolder)) {
          const playFile = src.split('/').pop();
          const displayTitle = adTitles.plays[playFile] ? adTitles.plays[playFile].title : playFile;
          updateNowPlaying(`Radio Play: ${displayTitle}`);
          updateMediaSession(displayTitle, "Enlightened Radio");
          audioElement.onended = playNext;
        } else if (src.includes(hostFolder)) {
          const hostFile = src.split('/').pop();
          updateNowPlaying(`Host: ${hostFile}`);
          updateMediaSession(`Host: ${hostFile}`, "Host");
          audioElement.onended = playNext;
        } else if (src.includes(introFile)) {
          updateNowPlaying('Welcome to Enlightened Radio');
          updateMediaSession('Welcome to Enlightened Radio', "Host");
          audioElement.onended = playNext;
        }
      }
      audioElement.play().catch(() => { });
    }
    // Only play introduction if never initialized
    if (!initialized) {
      initializeRadio();
    }
    const powerLed = document.getElementById('power-led');
    if (powerLed) {
      powerLed.style.background = '#c77dff';
      powerLed.style.boxShadow = '0 0 12px #c77dff, 0 0 20px #c77dff';
    }
    const powerButton = document.getElementById('powerButton');
    if (powerButton) {
      powerButton.textContent = '⏻';
      powerButton.style.background = '#240046';
      powerButton.style.color = '#e0aaff';
      powerButton.style.borderColor = '#9d4edd';
      powerButton.style.boxShadow = '0 0 15px rgba(157, 78, 221, 0.8), inset 0 0 8px rgba(157, 78, 221, 0.4)';
      powerButton.title = 'Power';
    }
  });
}

function powerOff() {
  updateNowPlaying('');
  radioOn = false;
  staticGain.gain.value = 0;
  // Pause static and music/voice immediately
  audioElement.pause();
  audioElement.onended = null; // Prevent auto-resume after pause
  // No need to stop staticNoise, just mute via gain
  const powerLed = document.getElementById('power-led');
  if (powerLed) {
    powerLed.style.background = '#222222';
    powerLed.style.boxShadow = '0 0 8px #000';
  }
  const powerButton = document.getElementById('powerButton');
  if (powerButton) {
    powerButton.textContent = '⏻';
    powerButton.style.background = '#111111';
    powerButton.style.color = '#7b2cbf';
    powerButton.style.borderColor = '#3c096c';
    powerButton.style.boxShadow = '0 0 10px rgba(123, 44, 191, 0.3)';
    powerButton.title = 'Power';
  }
}

function toggleRadio() {
  if (radioOn) {
    powerOff();
    // radioOn = false; // already set in powerOff
  } else {
    powerOn();
    // radioOn = true; // already set in powerOn
  }
}

// Persistence Logic

let isResetting = false;

function saveState() {
  if (isResetting) return;
  const state = {
    playedSongs: playedSongs,
    currentSongCount: currentSongCount,
    lastSongPlayed: lastSongPlayed,
    currentSeries: currentSeries,
    nextSeriesIndex: nextSeriesIndex,
    currentSrc: audioElement.src,
    currentTime: audioElement.currentTime,
    nowPlayingText: document.getElementById('now-playing').textContent,
    // Modifiers
    immersiveMode: document.getElementById('immersiveMode')?.checked || false,
    falloutMode: document.getElementById('falloutMode')?.checked || false,
    adFreeMode: document.getElementById('adFreeMode')?.checked || false,
    familyFriendlyMode: document.getElementById('familyFriendlyMode')?.checked || false
  };
  localStorage.setItem('radioState', JSON.stringify(state));
}

window.addEventListener('beforeunload', saveState);

// Add change listeners to checkboxes for immediate saving
document.getElementById('immersiveMode')?.addEventListener('change', saveState);
document.getElementById('falloutMode')?.addEventListener('change', saveState);
document.getElementById('adFreeMode')?.addEventListener('change', saveState);
document.getElementById('familyFriendlyMode')?.addEventListener('change', saveState);
// Also load state on page load to restore checkbox UI immediately
window.addEventListener('load', loadState);

function loadState() {

  const savedState = localStorage.getItem('radioState');
  if (savedState) {
    const state = JSON.parse(savedState);
    playedSongs = state.playedSongs || [];
    currentSongCount = state.currentSongCount || 0;
    lastSongPlayed = state.lastSongPlayed || '';
    currentSeries = state.currentSeries || null;
    nextSeriesIndex = state.nextSeriesIndex || 0;
    if (state.currentSrc) {
      audioElement.src = state.currentSrc;
      audioElement.currentTime = state.currentTime || 0;
    }
    if (state.nowPlayingText) {
      updateNowPlaying(state.nowPlayingText);
    }

    // Restore Modifiers
    const immersiveCheckbox = document.getElementById('immersiveMode');
    if (immersiveCheckbox) immersiveCheckbox.checked = state.immersiveMode || false;

    const falloutCheckbox = document.getElementById('falloutMode');
    if (falloutCheckbox) falloutCheckbox.checked = state.falloutMode || false;

    const adFreeCheckbox = document.getElementById('adFreeMode');
    if (adFreeCheckbox) adFreeCheckbox.checked = state.adFreeMode || false;

    const familyFriendlyCheckbox = document.getElementById('familyFriendlyMode');
    if (familyFriendlyCheckbox) familyFriendlyCheckbox.checked = state.familyFriendlyMode || false;

    return true; // State loaded
  }
  return false; // No state found
}


function resetRadio() {
  isResetting = true;
  localStorage.removeItem('radioState');
  localStorage.removeItem('radioVolume'); // Optional: reset volume too? Maybe keep volume.
  location.reload();
}

// Filters Dropdown Toggle
const filtersBtn = document.getElementById('filtersBtn');
const filtersContent = document.getElementById('filtersContent');

if (filtersBtn && filtersContent) {
  filtersBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    filtersContent.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!filtersBtn.contains(e.target) && !filtersContent.contains(e.target)) {
      filtersContent.classList.remove('show');
    }
  });
}


