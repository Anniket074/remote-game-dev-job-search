# 🌐 Hidden Gem Open-Source Unity WebGL Games

A curated collection of **under-the-radar, non-famous, and indie open-source WebGL games** developed in **Unity** and hosted on GitHub. Unlike mainstream commercial titles, these projects represent creative game jam entries, university experiments, portfolio prototypes, and niche indie mechanics that run directly inside modern web browsers via WebAssembly (Wasm) and WebGL 1.0/2.0.

---

## 📑 Table of Contents

1. [Quick Reference Matrix](#-quick-reference-matrix)
2. [3D Action, Strategy & Simulators](#-1-3d-action-strategy--simulators)
   - [Tower Defence 3D (20-Level Strategy)](#1-tower-defence-3d-prabdhal)
   - [Voxeland (Multiplayer Voxel World)](#2-voxeland-eggystudio)
   - [NASA Perseverance Rover WebXR/WebGL](#3-nasa-perseverance-rover-webxrwebgl-calebcram)
   - [Set In Stone (Cyberpunk FPS)](#4-set-in-stone-ctran20)
   - [LiBot Adventure (Robotic 3D Puzzle-Adventure)](#5-libot-adventure-computationalcore)
3. [2D Arcade, Shooters & Physics Toys](#-2-2d-arcade-shooters--physics-toys)
   - [Fruit Basket (Suika Game Physics Recreation)](#1-fruit-basket-jjkay03)
   - [SquareWheeler (Procedural Physics Experiment)](#2-squarewheeler-keijiro)
   - [Gears of Hell (Steampunk Bullet Hell Roguelike)](#3-gears-of-hell-punicgames)
   - [LowLevelDigger (Unity 6.3 Low-Level Physics)](#4-lowleveldigger-keijiro)
   - [Top-Down 2D Shooter (Zombie Wave Defense)](#5-top-down-2d-shooter-rubenmotadeia)
   - [SpaceShooter2D (Netlify Arcade Shooter)](#6-spaceshooter2d-karnb24)
4. [Platformers & Game Jam Prototypes](#-3-platformers--game-jam-prototypes)
   - [HouseRescue (Global Game Jam Platformer)](#1-houserescue-rodrigorosmaninho)
   - [Unity 2.5D Platformer (Simmer.io Runner)](#2-unity-25d-platformer-rafaelfortunato)
   - [Super Mario Bros Level 1-1 (Authentic Physics Remake)](#3-super-mario-bros-level-1-1-peytonbrsmith)
   - [Misfortune (Atmospheric Winter Game Jam)](#4-misfortune-pecas-dev)
   - [Dungeon, With Friends! (GGJ Co-op Crawler)](#5-dungeon-with-friends-mminer)
5. [Board, Strategy & Puzzle Games](#-4-board-strategy--puzzle-games)
   - [The Royal Game of Ur (Mesopotamian Strategy Board)](#1-the-royal-game-of-ur-danaugrs)
   - [Cut The Virus (2D Grid Medical Puzzle)](#2-cut-the-virus-m-biernat)
   - [TicTacToe MCTS (Monte Carlo Tree Search AI)](#3-tictactoe-mcts-aldidoanta)
   - [Only You Can Prevent Forest Fires (Environmental Sim)](#4-only-you-can-prevent-forest-fires-ewhanhan)
6. [Unity WebGL Technical Architecture & Optimization Notes](#-5-unity-webgl-technical-architecture--optimization-notes)

---

## 📊 Quick Reference Matrix

| Project | Dim. | Genre | Stars | Playable Web Link | GitHub Repository |
| :--- | :---: | :--- | :---: | :--- | :--- |
| **Tower Defence 3D** | 3D | Tower Defense | ~25⭐ | [Play on Simmer.io](https://simmer.io/@prabdhal/tower-defence-3d-enemy-wave) | [Repo](https://github.com/prabdhal/Tower-Defence-3D) |
| **Fruit Basket** | 2D | Suika / Merge Puzzle | ~12⭐ | [Play on Itch.io](https://jjkay03.itch.io/fruit-basket) | [Repo](https://github.com/jjkay03/Fruit-Basket) |
| **Voxeland** | 3D | Multiplayer Voxel / Sandbox | ~8⭐ | [Play on Voxeland.xyz](https://can-talat-yakan.itch.io/voxeland) | [Repo](https://github.com/EggyStudio/Voxeland) |
| **The Royal Game of Ur** | 3D | Ancient Board Strategy | ~14⭐ | [Play on GitHub Pages](https://danaugrs.github.io/royal-ur/) | [Repo](https://github.com/danaugrs/royal-ur) |
| **SquareWheeler** | 2D | Procedural Physics Toy | ~34⭐ | WebGL Sample Build | [Repo](https://github.com/keijiro/SquareWheeler) |
| **HouseRescue** | 2D | GGJ Platformer | ~7⭐ | [Play on GitHub Pages](https://rodrigorosmaninho.github.io/HouseRescue/) | [Repo](https://github.com/RodrigoRosmaninho/HouseRescue) |
| **NASA Rover AR / WebGL** | 3D | Interactive Space Sim | ~22⭐ | [Play on GitHub Pages](https://calebcram.github.io/Crossplatform-Multiplayer-Rover-AR-Demo/) | [Repo](https://github.com/calebcram/Crossplatform-Multiplayer-Rover-AR-Demo) |
| **LowLevelDigger** | 2D | Low-Level 2D Physics | ~95⭐ | Unity 6.3 Mini-Game | [Repo](https://github.com/keijiro/LowLevelDigger) |
| **Top-Down Shooter** | 2D | Wave Shooter | ~11⭐ | [Play on GitHub Pages](https://rubenmotadeia.github.io/top-down-shooting-unity/) | [Repo](https://github.com/rubenmotadeia/top-down-shooting-unity) |
| **Set In Stone** | 3D | Cyberpunk First-Person | ~4⭐ | [Play on CatCodeBox](https://www.catcodebox.com/cyber-security/) | [Repo](https://github.com/ctran20/SetInStone) |
| **Unity 2.5D Platformer** | 2.5D | Jump-and-Run | ~5⭐ | [Play on Simmer.io](https://simmer.io/@rafaelpaz/platformer) | [Repo](https://github.com/RafaelFortunato/Unity-Platformer) |
| **Super Mario Bros 1-1** | 2D | Classic Platformer Clone | ~5⭐ | [Play on GitHub Pages](https://peytonbrsmith.github.io/SuperMarioBros_Unity/) | [Repo](https://github.com/peytonbrsmith/SuperMarioBros_Unity) |
| **Cut The Virus** | 2D | Cross-Platform Puzzle | ~5⭐ | [Play on Itch.io](https://m-biernat.itch.io/cut-the-virus) | [Repo](https://github.com/m-biernat/cut-the-virus) |
| **SpaceShooter2D** | 2D | Retro Space Arcade | ~3⭐ | [Play on Netlify](https://karn-spaceshooter2d.netlify.app/) | [Repo](https://github.com/KARNB24/SpaceShooter2D) |
| **Gears of Hell** | 2D | Steampunk Bullet Hell | ~5⭐ | Browser WebGL Build | [Repo](https://github.com/PunicGames/Gears-Of-Hell) |
| **Misfortune** | 2D | Narrative Game Jam | ~7⭐ | [Play on Itch.io](https://pecasdev.itch.io/misfortune) | [Repo](https://github.com/Pecas-Dev/Misfortune) |
| **Dungeon, With Friends!** | 2D | Co-op Dungeon Crawler | ~6⭐ | [Play on MatthewMiner.com](https://matthewminer.com/ggj2022) | [Repo](https://github.com/mminer/ggj2022) |
| **LiBot Adventure** | 3D | Educational Adventure | ~46⭐ | Open Source 3D Game | [Repo](https://github.com/computationalcore/libot-adventure) |
| **Forest Fires** | 3D | Environmental Arcade | ~3⭐ | [Play on Unity Play](https://play.unity.com/mg/other/only-you-can-prevent-forest-fires) | [Repo](https://github.com/ewhanhan/Only-You-Can-Prevent-Forest-Fires-) |
| **TicTacToe MCTS** | 2D | Tree Search AI | ~13⭐ | Monte Carlo WebGL | [Repo](https://github.com/aldidoanta/TicTacToeMCTS) |

---

## 🚀 1. 3D Action, Strategy & Simulators

### 1. [Tower Defence 3D](https://github.com/prabdhal/Tower-Defence-3D) (`prabdhal/Tower-Defence-3D`)
* **Stars:** ~25⭐
* **Engine:** Unity 3D & C#
* **Live Demo:** [Play on Simmer.io](https://simmer.io/@prabdhal/tower-defence-3d-enemy-wave)
* **Overview:**
  A 3D tower defense game built specifically to run smoothly in WebGL browsers without sacrificing depth. Features 20 full levels, 16 unique upgrade paths, 4 active items, and 9 distinct enemy types with varying elemental resistances and movement speeds.
* **Architecture Highlights:**
  - **90° Step Camera Controller:** Smooth rotational stepping optimized for browser mouse input without causing WebGL cursor lock conflicts.
  - **Wave Spawning State Machine:** Lightweight coroutine-based wave manager minimizing memory allocation during intense projectile exchanges.

---

### 2. [Voxeland](https://github.com/EggyStudio/Voxeland) (`EggyStudio/Voxeland`)
* **Stars:** ~8⭐
* **Engine:** Unity 2020.3 LTS (URP)
* **Live Demo:** [Play on Itch.io](https://can-talat-yakan.itch.io/voxeland) / [Voxeland.xyz](http://www.Voxeland.xyz)
* **Overview:**
  A Minecraft and CubeWorld-inspired voxel sandbox that runs inside the browser via WebGL. Connects browser clients to an external dedicated server (AWS Lightsail) using Mirror Networking with WebSocket transport (`SimpleWebTransport`).
* **Architecture Highlights:**
  - **Dynamic Mesh Chunk Generation:** Procedural voxel meshing with greedy meshing principles to keep draw calls low for WebGL rendering contexts.
  - **WebSocket Networking in Browser:** Bridges Unity C# client networking to WebSockets seamlessly for HTML5 multiplayer.

---

### 3. [NASA Perseverance Rover AR / WebGL](https://github.com/calebcram/Crossplatform-Multiplayer-Rover-AR-Demo) (`calebcram/Crossplatform-Multiplayer-Rover-AR-Demo`)
* **Stars:** ~22⭐
* **Engine:** Unity 2020 / WebXR / WebGL
* **Live Demo:** [Play on GitHub Pages](https://calebcram.github.io/Crossplatform-Multiplayer-Rover-AR-Demo/)
* **Overview:**
  An interactive 3D model simulation of NASA's Perseverance Mars Rover. Features cross-platform deployment allowing web browser users to explore rover components, manipulate the robotic arm, and inspect scientific instruments in real time.
* **Architecture Highlights:**
  - Demonstrates lightweight asset loading and WebXR/WebGL fallback handling in browser canvases.

---

### 4. [Set In Stone](https://github.com/ctran20/SetInStone) (`ctran20/SetInStone`)
* **Stars:** ~4⭐
* **Engine:** Unity 3D
* **Live Demo:** [Play on CatCodeBox](https://www.catcodebox.com/cyber-security/)
* **Overview:**
  A stylized cyberpunk first-person shooter running in the browser. Players navigate high-tech corridors, battle robotic enemies, and solve terminal access security locks.
* **Architecture Highlights:**
  - WebGL cursor locking (`Cursor.lockState = CursorLockMode.Locked`) with escape toggling for responsive browser FPS aiming.

---

### 5. [LiBot Adventure](https://github.com/computationalcore/libot-adventure) (`computationalcore/libot-adventure`)
* **Stars:** ~46⭐
* **Engine:** Unity 3D
* **Overview:**
  A non-profit open-source educational game where players navigate a robot companion through spatial 3D environments, learning computational thinking concepts and solving algorithmic puzzles.

---

## 🎯 2. 2D Arcade, Shooters & Physics Toys

### 1. [Fruit Basket (Suika Game Recreation)](https://github.com/jjkay03/Fruit-Basket) (`jjkay03/Fruit-Basket`)
* **Stars:** ~12⭐
* **Engine:** Unity 2022.3
* **Live Demo:** [Play on Itch.io](https://jjkay03.itch.io/fruit-basket)
* **Overview:**
  An accurate open-source recreation of the viral hit *Suika Game* (Watermelon Game). Dropping fruits bounce, settle, and fuse into larger fruits upon colliding with identical species inside a physics container.
* **Architecture Highlights:**
  - **Physics Contact Fusion:** Collision event handling using `OnCollisionEnter2D` that verifies contact types, destroys old entities, and instantiates the next tier fruit at the midpoint vector.
  - **Juice FX:** Squash-and-stretch tweening and particle explosions during fruit tier promotions.

---

### 2. [SquareWheeler](https://github.com/keijiro/SquareWheeler) (`keijiro/SquareWheeler`)
* **Stars:** ~34⭐
* **Engine:** Unity
* **Author:** Keijiro Takahashi
* **Overview:**
  A playful physics experiment created by legendary Unity graphics engineer Keijiro Takahashi. Demonstrates procedural terrain generation and inverted catenary curve mathematics allowing a vehicle with square wheels to roll completely smoothly.
* **Architecture Highlights:**
  - Clean, minimal math-first implementation showcasing procedural 2D physics without pre-baked assets.

---

### 3. [Gears of Hell](https://github.com/PunicGames/Gears-Of-Hell) (`PunicGames/Gears-Of-Hell`)
* **Stars:** ~5⭐
* **Engine:** Unity 2D
* **Overview:**
  A steampunk bullet-hell arcade game mixing rogue-lite mechanics with rapid browser gameplay. Players dodge thousands of clockwork gears and fire ballistic projectiles across enclosed arena stages.
* **Architecture Highlights:**
  - Heavy projectile optimization: Custom 2D projectile pooling ensuring smooth 60 FPS performance without garbage collection stalls in WebAssembly.

---

### 4. [LowLevelDigger](https://github.com/keijiro/LowLevelDigger) (`keijiro/LowLevelDigger`)
* **Stars:** ~95⭐
* **Engine:** Unity 6.3
* **Author:** Keijiro Takahashi
* **Overview:**
  A fast-paced 2D digging arcade mini-game built on top of Unity 6's Low-Level 2D Physics API. Explores custom collision algorithms and voxel grid terrain destruction.

---

### 5. [Top-Down 2D Shooter](https://github.com/rubenmotadeia/top-down-shooting-unity) (`rubenmotadeia/top-down-shooting-unity`)
* **Stars:** ~11⭐
* **Engine:** Unity 2D
* **Live Demo:** [Play on GitHub Pages](https://rubenmotadeia.github.io/top-down-shooting-unity/)
* **Overview:**
  A polished top-down zombie shooter deployed directly to GitHub Pages. Includes mouse-cursor aiming, weapon recoil, muzzle flashes, and blood splat decals that stick to the floor.

---

### 6. [SpaceShooter2D](https://github.com/KARNB24/SpaceShooter2D) (`KARNB24/SpaceShooter2D`)
* **Stars:** ~3⭐
* **Engine:** Unity 2D & C#
* **Live Demo:** [Play on Netlify](https://karn-spaceshooter2d.netlify.app/)
* **Overview:**
  Classic arcade space shooter optimized for both mobile touch and desktop browser controls, hosted live on Netlify with sound effects and animated starfields.

---

## 🏃 3. Platformers & Game Jam Prototypes

### 1. [HouseRescue](https://github.com/RodrigoRosmaninho/HouseRescue) (`RodrigoRosmaninho/HouseRescue`)
* **Stars:** ~7⭐
* **Event:** Global Game Jam 2019
* **Live Demo:** [Play on GitHub Pages](https://rodrigorosmaninho.github.io/HouseRescue/)
* **Overview:**
  An adorable 2D platformer developed in 48 hours for Global Game Jam 2019. Players navigate a burning home, rescuing pets and valuable belongings before escaping.
* **Architecture Highlights:**
  - Automated deployment workflow publishing the WebGL build folder directly to GitHub Pages (`gh-pages`).

---

### 2. [Unity 2.5D Platformer](https://github.com/RafaelFortunato/Unity-Platformer) (`RafaelFortunato/Unity-Platformer`)
* **Stars:** ~5⭐
* **Engine:** Unity 2020
* **Live Demo:** [Play on Simmer.io](https://simmer.io/@rafaelpaz/platformer)
* **Overview:**
  A 2.5D jump-and-run platformer with 3D models traversing a 2D constraint plane. Features wall-sliding, double-jumping, collectible coins, and moving obstacle platforms.

---

### 3. [Super Mario Bros Level 1-1 Clone](https://github.com/peytonbrsmith/SuperMarioBros_Unity) (`peytonbrsmith/SuperMarioBros_Unity`)
* **Stars:** ~5⭐
* **Engine:** Unity 2D
* **Live Demo:** [Play on GitHub Pages](https://peytonbrsmith.github.io/SuperMarioBros_Unity/)
* **Overview:**
  A faithful frame-by-frame reconstruction of World 1-1 from the original NES *Super Mario Bros.* Implements authentic jump arcs, mushroom power-ups, pipe warping, Goomba squashing, and flag pole sliding.

---

### 4. [Misfortune](https://github.com/Pecas-Dev/Misfortune) (`Pecas-Dev/Misfortune`)
* **Stars:** ~7⭐
* **Event:** Uppsala University Winter Game Jam 2023
* **Live Demo:** [Play on Itch.io](https://pecasdev.itch.io/misfortune)
* **Overview:**
  A short, atmospheric 2D narrative puzzle-platformer exploring bad luck and environmental manipulation to bypass hazards.

---

### 5. [Dungeon, With Friends!](https://github.com/mminer/ggj2022) (`mminer/ggj2022`)
* **Stars:** ~6⭐
* **Event:** Global Game Jam 2022
* **Live Demo:** [Play on MatthewMiner.com](https://matthewminer.com/ggj2022)
* **Overview:**
  A cooperative dungeon puzzle game exploring the GGJ theme of "Duality". Players coordinate switches, pressure plates, and trapdoors.

---

## 🎲 4. Board, Strategy & Puzzle Games

### 1. [The Royal Game of Ur](https://github.com/danaugrs/royal-ur) (`danaugrs/royal-ur`)
* **Stars:** ~14⭐
* **Engine:** Unity 3D
* **Live Demo:** [Play on GitHub Pages](https://danaugrs.github.io/royal-ur/)
* **Overview:**
  A digital implementation of the 4,500-year-old Mesopotamian strategy board game. Features 3D pyramidal dice physics, custom piece shaders, turn verification rules, and an AI opponent.
* **Architecture Highlights:**
  - Clean separation between pure board game logic and Unity presentation layer, allowing zero-latency move validation in WebGL.

---

### 2. [Cut The Virus](https://github.com/m-biernat/cut-the-virus) (`m-biernat/cut-the-virus`)
* **Stars:** ~5⭐
* **Live Demo:** [Play on Itch.io](https://m-biernat.itch.io/cut-the-virus)
* **Overview:**
  A tactical cross-platform grid puzzle game where players cut infection lines and isolate virus cells before they multiply.

---

### 3. [TicTacToe MCTS](https://github.com/aldidoanta/TicTacToeMCTS) (`aldidoanta/TicTacToeMCTS`)
* **Stars:** ~13⭐
* **Overview:**
  An educational Unity WebGL demonstration of the **Monte Carlo Tree Search (MCTS)** algorithm. Players play against an AI that simulates thousands of future board trajectories in real-time Wasm execution.

---

### 4. [Only You Can Prevent Forest Fires](https://github.com/ewhanhan/Only-You-Can-Prevent-Forest-Fires-) (`ewhanhan/Only-You-Can-Prevent-Forest-Fires-`)
* **Stars:** ~3⭐
* **Live Demo:** [Play on Unity Play](https://play.unity.com/mg/other/only-you-can-prevent-forest-fires)
* **Overview:**
  A 3D simulation arcade game highlighting wildfire spread patterns, firebreak construction, and water drop targeting.

---

## 🛠️ 5. Unity WebGL Technical Architecture & Optimization Notes

Deploying Unity games to WebGL presents unique technical constraints compared to Standalone PC or Mobile builds. Here are the core patterns used across these open-source projects:

### 1. Memory Budgeting & WebAssembly Heap
* In WebGL, the browser sandbox allocates a single contiguous memory block (`WebAssembly.Memory`).
* If `TOTAL_MEMORY` is configured too low, the game crashes with `Out of memory` (OOM). If configured too high, 32-bit browsers or mobile devices will fail to allocate the initial buffer.
* **Best Practice:** Keep initial memory allocation between **256 MB and 512 MB** for 2D/casual games, and never allocate beyond 1024 MB for browser compatibility.

### 2. WebAudio & Autoplay Restrictions
* Modern browsers (Chrome, Safari, Firefox) block audio playback until the user interacts with the page (click or tap).
* Unity automatically resumes the `AudioContext` on the first canvas click, but games must handle initial muted states gracefully to avoid console warnings.

### 3. JavaScript Interop (`.jslib`)
To communicate between Unity C# and the hosting web page or platform APIs (e.g., itch.io, CrazyGames, Telegram, GitHub Pages):

```csharp
// In C# script:
using System.Runtime.InteropServices;

public class WebBridge : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void PostScoreToWeb(int score);

    public void OnGameOver(int finalScore)
    {
        #if UNITY_WEBGL && !UNITY_EDITOR
        PostScoreToWeb(finalScore);
        #endif
    }
}
```

```javascript
// In Assets/Plugins/WebGL/WebBridge.jslib:
mergeInto(LibraryManager.library, {
    PostScoreToWeb: function (score) {
        window.dispatchEvent(new CustomEvent('unityScore', { detail: score }));
        console.log("Score posted to browser:", score);
    }
});
```

### 4. Asset Delivery & Texture Compression
* **Brotli / Gzip Compression:** Always enable Brotli compression in Unity Project Settings (`Player Settings > Publishing Settings > Compression Format > Brotli`) to reduce initial `.wasm` and `.data` download sizes by up to 70%.
* **Crunch Texture Compression:** Use Crunch compression on 2D textures to keep the initial asset bundle lightweight for fast browser loading times.
