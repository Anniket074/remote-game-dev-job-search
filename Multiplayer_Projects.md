# 🌐 Open-Source Unity Multiplayer Projects (2D & 3D)

A curated catalog of open-source **2D and 3D multiplayer games** developed with the **Unity Game Engine**, hosted on GitHub. This reference guide details the architecture, networking framework, genre, and key technical implementations of each project to serve as learning benchmarks and production starting points.

---

## 📑 Table of Contents

1. [Quick Reference Matrix](#-quick-reference-matrix)
2. [3D Multiplayer Games](#-3d-multiplayer-games)
   - [Boss Room: Co-op Multiplayer RPG](#1-boss-room-co-op-multiplayer-rpg-unity-technologies)
   - [Megacity Metro (150-Player DOTS Shooter)](#2-megacity-metro-unity-technologies)
   - [FPS Sample (Production HDRP FPS)](#3-fps-sample-unity-technologies)
   - [Multiplayer-FPS (Photon PUN2 FPS)](#4-multiplayer-fps-armour)
   - [Team-Capture (Mirror Retro Arena FPS)](#5-team-capture-voltstro-studios)
   - [ECS Network Racing Sample](#6-ecs-network-racing-sample-unity-technologies)
3. [2D Multiplayer Games](#-2d-multiplayer-games)
   - [NSMB: Mario vs Luigi Online Remake](#1-nsmb---mario-vs-luigi-online-remake-ipodtouch0218)
   - [DARKLINGS (Rollback Fighter)](#2-darklings---fighting-game-kidagine)
   - [Fish Game (Nakama Platform Shooter)](#3-fish-game-for-unity-heroic-labs)
   - [2D Space Shooter (NGO Bitesize)](#4-2d-space-shooter-unity-technologies)
   - [DelayNoMoreUnity (GGPO-Inspired Platformer)](#5-delaynomoreunity-genxium)
   - [Unity 2D Online RPG / MMORPG](#6-unity-2d-online-rpg--mmorpg-dennysoliveira)
   - [Unity Multiplayer NGO 2D Playground](#7-unity-multiplayer-ngo-2d-playground-samuel-asher-rivello)
4. [Unity Networking Framework Comparison](#-unity-networking-framework-comparison)

---

## 📊 Quick Reference Matrix

| Project | Dim. | Genre | Networking Stack | Architecture | GitHub Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Boss Room** | 3D | Co-op Action RPG | Netcode for GameObjects (NGO) | Server-Authoritative | [Repo](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop) |
| **Megacity Metro** | 3D | Sci-Fi Flying Shooter | Netcode for Entities (DOTS) | Dedicated Server (150 players) | [Repo](https://github.com/Unity-Technologies/megacity-metro) |
| **FPS Sample** | 3D | Tactical First-Person Shooter | Unity Transport / Hybrid ECS | Authoritative Dedicated Server | [Repo](https://github.com/Unity-Technologies/FPSSample) |
| **Multiplayer-FPS** | 3D | First-Person Shooter | Photon PUN 2 | Cloud Relay / Rooms | [Repo](https://github.com/Armour/Multiplayer-FPS) |
| **Team-Capture** | 3D | Arena "Boomer" FPS | Mirror Networking | Server-Authoritative / Steam Auth | [Repo](https://github.com/Voltstro-Studios/Team-Capture) |
| **ECS Network Racing** | 3D | Vehicle Racing | Unity DOTS / Transport | Deterministic Physics Sync | [Repo](https://github.com/Unity-Technologies/ECS-Network-Racing-Sample) |
| **NSMB Mario vs Luigi** | 2D | Competitive Platformer | Custom / Quantum | Deterministic / Lobby Matchmaking | [Repo](https://github.com/ipodtouch0218/NSMB-MarioVsLuigi) |
| **DARKLINGS** | 2D | Versus Fighting Game | Rollback Netcode (GGPO) | Deterministic Rollback (60 FPS) | [Repo](https://github.com/kidagine/Darklings-FightingGame) |
| **Fish Game** | 2D | Arena Platform Shooter | Nakama Game Server | Authoritative Server Backend | [Repo](https://github.com/heroiclabs/fishgame-unity) |
| **2D Space Shooter** | 2D | Top-Down Arcade | Netcode for GameObjects (NGO) | Host / Server-Authoritative | [Repo](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize) |
| **DelayNoMoreUnity** | 2D | Platformer Arena | WebSockets + UDP (GGPO) | Input-delayed Rollback | [Repo](https://github.com/genxium/DelayNoMoreUnity) |
| **2D Online RPG** | 2D | MMORPG / Online RPG | Mirror Networking | Server-Authoritative + Grid AOI | [Repo](https://github.com/DennysOliveira/unity-2d-online-rpg) |
| **NGO 2D Playground** | 2D | Sandbox / Architecture | Netcode for GameObjects (NGO) | Client-Auth vs Server-Auth | [Repo](https://github.com/SamuelAsherRivello/unity-multiplayer-ngo-2d-playground) |

---

## 🧊 3D Multiplayer Games

### 1. [Boss Room: Co-op Multiplayer RPG](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop) (Unity Technologies)
* **GitHub Repository:** [`Unity-Technologies/com.unity.multiplayer.samples.coop`](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop)
* **Stars:** ~2,000+ ⭐
* **Engine Version:** Unity 6 LTS / 2022.3 LTS
* **Networking Stack:** **Netcode for GameObjects (NGO v2.4+)** + Unity Gaming Services (UGS Relay, Lobby, Authentication)
* **Genre:** Isometric Co-op Action RPG (up to 8 players)
* **Overview:**
  Unity's flagship educational sample built from the ground up to showcase best practices for commercial multiplayer development. Players pick between character classes (Mage, Rogue, Archer, Warrior) to clear out minions and defeat a dungeon boss.
* **Key Architecture & Technical Patterns:**
  - **Server-Authoritative Gameplay:** Host/Server executes gameplay logic, while clients anticipate actions with latency-masking animations.
  - **Networked Actions & RPCs:** Clean separation between continuous states (`NetworkVariable`, `NetworkList`) and one-shot RPC triggers (`ServerRpc`, `ClientRpc`).
  - **Dynamic Object Pooling:** Networked projectiles and VFX spawned efficiently via `NetworkObjectPool`.
  - **Pre-Game Lobby:** Character selection scene synchronized across all clients before transitioning to the combat scene.

---

### 2. [Megacity Metro](https://github.com/Unity-Technologies/megacity-metro) (Unity Technologies)
* **GitHub Repository:** [`Unity-Technologies/megacity-metro`](https://github.com/Unity-Technologies/megacity-metro)
* **Stars:** ~1,180+ ⭐
* **Engine Version:** Unity 2022.3 / Unity 6
* **Networking Stack:** **Netcode for Entities (DOTS / ECS)** + Unity Gaming Services + Vivox
* **Genre:** Sci-Fi Flying Shooter (up to 150 players simultaneously)
* **Overview:**
  Megacity Metro proves the scalability of Unity's Data-Oriented Technology Stack (DOTS) in high-density multiplayer environments, handling up to 150 players in a massive streaming city map.
* **Key Architecture & Technical Patterns:**
  - **Netcode for Entities:** Deterministic simulation with client-side prediction, tick-based interpolation, and server lag compensation.
  - **Dedicated Headless Server:** Build profiles optimized for Linux and Windows dedicated cloud hosting.
  - **Rendering Pipeline:** High-performance Universal Render Pipeline (URP) with Render Graph and Spatial Temporal Anti-Aliasing (STP).
  - **Integrated Services:** Live matchmaking, server scaling, and Vivox 3D positional spatial voice chat.

---

### 3. [FPS Sample](https://github.com/Unity-Technologies/FPSSample) (Unity Technologies)
* **GitHub Repository:** [`Unity-Technologies/FPSSample`](https://github.com/Unity-Technologies/FPSSample)
* **Stars:** ~5,130+ ⭐
* **Engine Version:** Unity 2018.3+ (HDRP)
* **Networking Stack:** Unity Transport Package + Hybrid ECS
* **Genre:** Tactical First-Person Shooter
* **Overview:**
  A production-grade, AAA-quality first-person multiplayer shooter demo developed by internal Unity engineers to test real-world netcode boundaries.
* **Key Architecture & Technical Patterns:**
  - **Authoritative Dedicated Server:** Complete server reconciliation, weapon hit verification, and rollback mechanics.
  - **Full Weapon Mechanics:** Ballistic projectiles, hitscan weapons, bullet penetration, recoil patterns, and audio occlusion.
  - **Custom Level Streaming:** Multi-scene level management and asset bundle pipeline.

---

### 4. [Multiplayer-FPS](https://github.com/Armour/Multiplayer-FPS) (Armour)
* **GitHub Repository:** [`Armour/Multiplayer-FPS`](https://github.com/Armour/Multiplayer-FPS)
* **Stars:** ~1,260+ ⭐
* **License:** MIT License
* **Engine Version:** Unity 2022.3 LTS
* **Networking Stack:** **Photon Unity Networking 2 (PUN 2)**
* **Genre:** First-Person Arena Shooter
* **Overview:**
  A complete multiplayer FPS supporting room matchmaking, player health management, third-person replication, and multi-device input.
* **Key Architecture & Technical Patterns:**
  - **Animation Rigging & Blend Trees:** Mixamo rigs using Unity Body Masks to separate lower-body movement from upper-body weapon aiming.
  - **Inverse Kinematics (IK):** `IKControl.cs` ensures accurate weapon handling and hand placement across different player models.
  - **Decal & Impact Lifecycle:** Dynamic bullet decals tailored to material physics (metal, wood, concrete, water).
  - **Multi-Input Support:** Configured for Keyboard/Mouse, Gamepad, VR Headsets, and motion tracking.

---

### 5. [Team-Capture](https://github.com/Voltstro-Studios/Team-Capture) (Voltstro-Studios)
* **GitHub Repository:** [`Voltstro-Studios/Team-Capture`](https://github.com/Voltstro-Studios/Team-Capture)
* **Stars:** ~180+ ⭐
* **License:** GNU AGPLv3
* **Engine Version:** Unity 2021.3+ / 2022.3
* **Networking Stack:** **Mirror Networking**
* **Genre:** Fast-Paced Retro Arena FPS ("Boomer Shooter")
* **Overview:**
  An arena FPS inspired by *Quake*, *Half-Life 2: Deathmatch*, and *Team Fortress 2*. Focuses on fast bunny hopping, weapon switching, and dedicated headless server performance.
* **Key Architecture & Technical Patterns:**
  - **Lag Compensation:** Server-authoritative movement with client reconciliation and rewind hitboxes.
  - **Steam Integration:** Steamworks SDK with Steam Server Authentication and MOTD.
  - **Modern Unity Tooling:** Addressables asset management, Universal Render Pipeline (URP), and the new Input System.

---

### 6. [ECS Network Racing Sample](https://github.com/Unity-Technologies/ECS-Network-Racing-Sample) (Unity Technologies)
* **GitHub Repository:** [`Unity-Technologies/ECS-Network-Racing-Sample`](https://github.com/Unity-Technologies/ECS-Network-Racing-Sample)
* **Stars:** ~760+ ⭐
* **Networking Stack:** Unity Transport + Pure DOTS
* **Genre:** 3D Vehicle / Kart Racing
* **Overview:**
  Demonstrates low-bandwidth synchronization of high-speed vehicle physics and wheel collisions across a network using Unity's Burst Compiler and Job System.

---

## 🎨 2D Multiplayer Games

### 1. [NSMB - Mario vs Luigi Online Remake](https://github.com/ipodtouch0218/NSMB-MarioVsLuigi) (ipodtouch0218)
* **GitHub Repository:** [`ipodtouch0218/NSMB-MarioVsLuigi`](https://github.com/ipodtouch0218/NSMB-MarioVsLuigi)
* **Stars:** ~1,100+ ⭐
* **Engine Version:** Unity 6 / 2022.3
* **Networking Stack:** Custom Deterministic Networking / Quantum integration
* **Genre:** 2D Competitive Platformer (2 to 10 players)
* **Overview:**
  A standalone 2-10 player online remake of the *Mario vs. Luigi* battle mode from *New Super Mario Bros. DS*. Players battle on arenas collecting Power Stars while utilizing interactive power-ups and physics hazards.
* **Key Architecture & Technical Patterns:**
  - **Deterministic 2D Physics:** Platformer collision detection replicated cleanly across multiple networked clients.
  - **Rich Lobby & Room System:** Custom rooms, password protection, chat, and spectator modes.
  - **Cross-Platform Deployment:** Runs seamlessly on Windows, macOS, Linux, and WebGL.

---

### 2. [DARKLINGS - Fighting Game](https://github.com/kidagine/Darklings-FightingGame) (kidagine)
* **GitHub Repository:** [`kidagine/Darklings-FightingGame`](https://github.com/kidagine/Darklings-FightingGame)
* **Stars:** ~350+ ⭐
* **Engine Version:** Unity 2021.3 LTS
* **Networking Stack:** **Rollback Netcode (GGPO-inspired)**
* **Genre:** 2D Versus Fighting Game
* **Overview:**
  An educational open-source fighting game designed specifically to solve one of game development's toughest challenges: implementing deterministic rollback netcode inside Unity.
* **Key Architecture & Technical Patterns:**
  - **Fixed 60 FPS Logic Tick:** Gameplay logic ticks at an invariant 60Hz rate decoupled from variable display framerates.
  - **Deterministic State Machines:** Hitstop systems, input buffers, and animation frame data that allow rollbacks without desync.
  - **Testing Pipeline:** Integrated with [ParrelSync](https://github.com/VeriorPies/ParrelSync) for fast multi-instance local testing in the Unity Editor.

---

### 3. [Fish Game for Unity](https://github.com/heroiclabs/fishgame-unity) (Heroic Labs)
* **GitHub Repository:** [`heroiclabs/fishgame-unity`](https://github.com/heroiclabs/fishgame-unity)
* **Stars:** ~65+ ⭐
* **License:** Apache 2.0
* **Engine Version:** Unity 2019.4+ / 2020.3
* **Networking Stack:** **Nakama Open-Source Game Server** + Nakama Unity Client SDK
* **Genre:** 2D Platform Arena Shooter (2 to 4 players, inspired by *Duck Game*)
* **Overview:**
  Built by Heroic Labs to demonstrate how to integrate the open-source Nakama game server with a real-time Unity 2D game.
* **Key Architecture & Technical Patterns:**
  - **Server Orchestration:** Includes `docker-compose.yml` for spinning up local Nakama and CockroachDB instances.
  - **Match Lifecycle:** Device authentication, server-managed matchmaking tickets, and real-time multiplayer message relays.
  - **2D Weapon & Physics State:** Fast projectile replication and death/respawn loops.

---

### 4. [2D Space Shooter (Unity Bitesize Samples)](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize/tree/main/Basic/2DSpaceShooter) (Unity Technologies)
* **GitHub Repository:** [`Unity-Technologies/com.unity.multiplayer.samples.bitesize`](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize)
* **Stars:** ~450+ ⭐
* **Networking Stack:** **Netcode for GameObjects (NGO)** + Unity Transport
* **Genre:** Top-Down 2D Arcade Space Shooter
* **Overview:**
  Unity's focused official mini-sample showing the absolute fundamentals of 2D multiplayer using NGO without the bloat of full production assets.
* **Key Architecture & Technical Patterns:**
  - 2D Rigidbody and Transform replication across network boundaries.
  - Network-spawned bullet prefabs and health/score synchronization.
  - Clean implementation of `NetworkBehaviour`, `NetworkVariable<int>`, and client input sending.

---

### 5. [DelayNoMoreUnity](https://github.com/genxium/DelayNoMoreUnity) (genxium)
* **GitHub Repository:** [`genxium/DelayNoMoreUnity`](https://github.com/genxium/DelayNoMoreUnity)
* **Stars:** ~135+ ⭐
* **Networking Stack:** WebSockets + UDP (GGPO-inspired)
* **Genre:** 2D Competitive Arena Platformer
* **Overview:**
  A technical demonstration of peer-to-peer delayed-input rollback netcode in Unity for twitchy, latency-sensitive 2D action games.

---

### 6. [Unity 2D Online RPG / MMORPG](https://github.com/DennysOliveira/unity-2d-online-rpg) (DennysOliveira)
* **GitHub Repository:** [`DennysOliveira/unity-2d-online-rpg`](https://github.com/DennysOliveira/unity-2d-online-rpg)
* **Stars:** ~30+ ⭐
* **Networking Stack:** **Mirror Networking**
* **Genre:** 2D Top-Down MMORPG / Online RPG
* **Overview:**
  An authoritative 2D online RPG prototype covering character selection, server-managed inventory, monster combat, and network optimization.
* **Key Architecture & Technical Patterns:**
  - **Area of Interest (AOI):** 2D Grid Proximity Checker ensures clients only receive updates for entities within their local tile grid.
  - **Persistence & UI:** Account registration, character selection, inventory slots, skill bars, and NPC dialogue systems.

---

### 7. [Unity Multiplayer NGO 2D Playground](https://github.com/SamuelAsherRivello/unity-multiplayer-ngo-2d-playground) (Samuel Asher Rivello)
* **GitHub Repository:** [`SamuelAsherRivello/unity-multiplayer-ngo-2d-playground`](https://github.com/SamuelAsherRivello/unity-multiplayer-ngo-2d-playground)
* **Stars:** ~20+ ⭐
* **License:** MIT License
* **Networking Stack:** **Netcode for GameObjects (NGO)** + URP
* **Genre:** 2D Sandbox & Multiplayer Architecture Progression
* **Overview:**
  A reference project by veteran Unity architect Samuel Asher Rivello illustrating the exact migration path from single-player to client-authoritative to server-authoritative 2D multiplayer.

---

## 🛠️ Unity Networking Framework Comparison

When deciding which networking library to choose for your own game, use this quick breakdown:

| Networking Framework | Open Source? | Best Suited For | Key Strength | Considerations |
| :--- | :---: | :--- | :--- | :--- |
| **Unity Netcode for GameObjects (NGO)** | ✅ Yes | Co-op, party games, RPGs, turn-based games | First-party Unity support, seamless UGS integration | Best for small-to-medium player rooms (2–16 players) |
| **Unity Netcode for Entities (DOTS)** | ✅ Yes | Large-scale battles, MMOs, 100+ player shooters | Extreme performance, multi-threaded simulation | Steep ECS learning curve, strict data modeling |
| **Mirror Networking** | ✅ Yes | Indie multiplayer, FPS, MMORPGs, dedicated servers | Battle-tested, UNet-familiar API, large active community | Relies on community transports (KCP, Telepathy) |
| **Photon Fusion / Quantum** | ⚠️ SDK Free, Engine Closed | High-tick FPS, Battle Royale, esports fighting games | Industry standard prediction, deterministic physics engine | Requires Photon Cloud or self-hosted CCU licensing |
| **Nakama (Heroic Labs)** | ✅ Yes (Server) | Metagame backend, social features, turn-based & real-time | Full server ecosystem (chat, leaderboards, matches, auth) | Requires hosting Docker/server infrastructure |
| **Fish-Networking (FishNet)** | ✅ Yes | Modern alternative to Mirror/NGO | High performance, built-in client prediction and lag compensation | Third-party package, active community |
