# 🕹️ Open-Source Unity Hypercasual Games & Mechanics

A curated catalog of open-source **Hypercasual games, mechanics, and project templates** developed in **Unity**, hosted on GitHub. This reference guide details the core gameplay loops, mechanics, controls, and architecture of each project to serve as learning benchmarks and rapid prototyping starting points.

---

## 📑 Table of Contents

1. [Quick Reference Matrix](#-quick-reference-matrix)
2. [Runners, Swerve & Gate-Multiplier Games](#-1-runners-swerve--gate-multiplier-games)
   - [Count Master Clone (Crowd Runner)](#1-count-master-clone-onur-kantar)
   - [Cube Surfer Mechanic (Stack Runner)](#2-cube-surfer-mechanic-cengizhankervanci)
   - [Silly Race Replica (Obstacle Course vs. AI)](#3-silly-race-replica-enes-telli)
   - [FlyingMan 3D (Slingshot Trajectory)](#4-flyingman-3d-enes-telli)
   - [SeasonPass Runner (Transformation Gates)](#5-seasonpass-runner-enes-telli)
   - [Hyper Casual Runner (Racing Simulation)](#6-hyper-casual-runner-botmeo)
3. [Physics, Timing & Voodoo/Ketchapp/SayGames Replicas](#-2-physics-timing--voodooketchappsaygames-replicas)
   - [Helix Jump Replica (Cylinder Bounce)](#1-helix-jump-replica-almiraolcer)
   - [Unity Hole vs Colors (Color Hole 3D)](#2-unity-hole-vs-colors-color-hole-3d-herbou)
   - [3D Casual Games Collection (Chain Cube 2048 & Roller Splat)](#3-3d-casual-games-collection-sinlessdevil)
   - [Slice It All Clone (Knife Flip Slicing)](#4-slice-it-all-clone-ali-caglar)
   - [Tornado Smash (Destructive Voxel Swarm)](#5-tornado-smash-bariscanyilmaz)
   - [ZigZag (Single-Tap 90° Direction Toggle)](#6-zigzag-shubham-saudolla)
4. [Puzzles, Sorting & Drawing](#-3-puzzles-sorting--drawing)
   - [Match 3D Mechanic (Physics Object Pairing)](#1-match-3d-mechanic-cengizhankervanci)
   - [DrawRush HyperCasual (Draw-Your-Wheels)](#2-drawrush-hypercasual-kaanekimoz)
   - [Amaze Clone (Grid Trail Painter)](#3-amaze-clone-mbilalbark)
   - [Sort It 3D (Color Tube Sorter)](#4-sort-it-3d-bariscanyilmaz)
5. [Idle Arcade & Resource Stacking](#-4-idle-arcade--resource-stacking)
   - [Hypercasual Idle Game Mechanic (Backpack Stacking)](#1-hypercasual-idle-game-mechanic-vladyslavnadeev)
   - [Idle Action Farm (Harvest & Upgrade Loops)](#2-idle-action-farm-citrongames)
6. [Architecture Templates & Developer Toolkits](#-5-architecture-templates--developer-toolkits)
   - [HyperTemplate (Game Loop & State Machine)](#1-hypertemplate-sinanermis)
   - [Awesome Hyper Casual (Community Curated Directory)](#2-awesome-hyper-casual-sinanermis)
   - [TapTap Game Template (One-Touch Base)](#3-taptap-game-template-vadercat)
7. [Hypercasual Core Development Patterns](#-6-hypercasual-core-development-patterns)

---

## 📊 Quick Reference Matrix

| Project | Sub-Genre | Core Mechanic | Inspiration / Style | GitHub Link |
| :--- | :--- | :--- | :--- | :--- |
| **Count Master Clone** | Crowd Runner | Math gates (`+`, `×`), stickman flocking | *Count Masters* (Freeplay) | [Repo](https://github.com/onur-kantar/Count-Master-Clone-Game) |
| **Cube Surfer Mechanic** | Stack Runner | Swerve stack height, wall deductions | *Cube Surfer* (Voodoo) | [Repo](https://github.com/cengizhankervanci/Cube_Surfer_Mechanic) |
| **Silly Race Replica** | Obstacle Course | Moving obstacles, ragdolls, simple AI | *Silly Race* / *Fall Guys* | [Repo](https://github.com/enes-telli/Silly-Race-Replica) |
| **FlyingMan 3D** | Trajectory Runner | Slingshot launch, airborne multiplier rings | Voodoo Slingshot style | [Repo](https://github.com/enes-telli/FlyingMan3D) |
| **SeasonPass** | Transform Runner | Clothing gates, identification speed | Dress-up / Choice Runners | [Repo](https://github.com/enes-telli/SeasonPass) |
| **Helix Jump Replica** | Physics Bounce | Tower rotation, bouncy ball, platform gaps | *Helix Jump* (Voodoo) | [Repo](https://github.com/almiraolcer/Helix-Jump-By-Almi) |
| **Hole vs Colors** | Gravity / Hole | 2D stencil ground hole, physics suction | *Color Hole 3D* (Good Job Games) | [Repo](https://github.com/herbou/Unity_HoleVsColors) |
| **Casual Games Collection** | Physics & Arcade | Chain Cube 2048, Roller Splat, Color Hole | Multi-Game Collection | [Repo](https://github.com/SinlessDevil/CasualGamesCollection) |
| **Slice It All Clone** | Physics / Timing | Tap-to-flip impulse, knife blade sticking | *Slice It All* (SayGames) | [Repo](https://github.com/ali-caglar/Hyper-SliceItAll) |
| **Tornado Smash** | Destruction | Debris suction, physics absorption | *Tornado Smash* | [Repo](https://github.com/bariscanyilmaz/tornado-smash) |
| **ZigZag** | Tap-Timing | 90° turn toggle on single tap | *ZigZag* (Ketchapp) | [Repo](https://github.com/shubham-saudolla/ZigZag) |
| **Match 3D** | Physics Puzzle | 3D raycast drag & pair matching | *Match 3D* (Lion Studios) | [Repo](https://github.com/cengizhankervanci/Match_3D) |
| **DrawRush** | Physics / Drawing | Draw physics wheel lines dynamically | *Draw Climber* (Voodoo) | [Repo](https://github.com/KaanEkimoz/DrawRush-HyperCasual) |
| **Amaze Clone** | Grid Puzzle | Continuous direction swipe & trail paint | *Amaze!* (Crazy Labs) | [Repo](https://github.com/mbilalbark/amaze-clone) |
| **Sort It 3D** | Sorting Puzzle | Test tube ball stacking & sorting | *Sort It 3D* | [Repo](https://github.com/bariscanyilmaz/sortit3d) |
| **Hypercasual Idle** | Idle Arcade | Backpack stack, upgrade pads, joystick | *My Little Universe* / *Lumbercraft* | [Repo](https://github.com/VladyslavNadeev/Hypercasual-Idle-Game) |
| **Idle Action Farm** | Idle Arcade | Sickle harvesting, customer queues | *Farm Land* (Homa Games) | [Repo](https://github.com/citrongames/Idle-Action-Farm) |
| **HyperTemplate** | Architecture Kit | Finite State Machine, Pooling, DOTween | Universal Framework | [Repo](https://github.com/SinanErmis/HyperTemplate) |

---

## 🏃 1. Runners, Swerve & Gate-Multiplier Games

### 1. [Count Master Clone](https://github.com/onur-kantar/Count-Master-Clone-Game) (`onur-kantar/Count-Master-Clone-Game`)
* **Stars:** ~25⭐
* **Mechanic:** Math Gate Multiplication & Stickman Swarm Flocking
* **Overview:**
  A complete implementation of the crowd runner genre made famous by *Count Masters*. The player controls a swarm of stickmen using horizontal swerve touch controls, running through mathematical modifier gates (`+10`, `×2`, `-5`), avoiding moving obstacles, and charging an enemy tower at the finish line.
* **Key Architecture & Code Highlights:**
  - **Flocking & Formation Math:** Dynamic stickman formation algorithm using Fermat's spiral / circular dispersion math to smoothly position crowd members around the lead player.
  - **Stickman Object Pooling:** Reusable stickman prefabs spawned and despawned without runtime garbage collection spikes.
  - **Gate Detection System:** Collider triggers with modifier math and color-coded gate shaders (Blue = Positive, Red = Negative).

---

### 2. [Cube Surfer Mechanic](https://github.com/cengizhankervanci/Cube_Surfer_Mechanic) (`cengizhankervanci/Cube_Surfer_Mechanic`)
* **Stars:** ~41⭐
* **Mechanic:** Stack Collection & Wall Deduction
* **Overview:**
  Recreation of Voodoo’s *Cube Surfer*. The player moves along a continuous runner track, collecting cubes that slide underneath their avatar to elevate height. Hitting barriers strips away lower cubes proportional to wall height while keeping the player surfing on top.
* **Key Architecture & Code Highlights:**
  - **Dynamic Stack Hierarchy:** Real-time re-parenting of cube entities with collision event triggers that deduct cubes from the stack base.
  - **Smooth Camera Framing:** Camera offset dynamically adjusts height using linear interpolation (`Mathf.Lerp` / DOTween) based on active stack size.

---

### 3. [Silly Race Replica](https://github.com/enes-telli/Silly-Race-Replica) (`enes-telli/Silly-Race-Replica`)
* **Stars:** ~47⭐
* **Mechanic:** Physics Obstacle Course vs. Lightweight AI
* **Overview:**
  A runner inspired by *Fall Guys* and *Silly Race*. The player maneuvers through rotating doors, moving punchers, and swinging pendulums while racing against simulated AI competitors.
* **Key Architecture & Code Highlights:**
  - **AI Agent Navigation:** Simple waypoint-following NavMesh agents with randomized speed and reaction latency to mimic human opponents.
  - **Ragdoll & Knockback Physics:** Seamless transition from kinematic running animations to active ragdoll state upon physics impact.

---

### 4. [FlyingMan 3D](https://github.com/enes-telli/FlyingMan3D) (`enes-telli/FlyingMan3D`)
* **Stars:** ~30⭐
* **Mechanic:** Slingshot Trajectory Launch & Gate Multipliers
* **Overview:**
  Launches a ragdoll character with an elastic slingshot mechanic. During airborne descent, the player steers through multiplier rings to spawn a team of clones before clashing with the defensive line at the level goal.

---

### 5. [SeasonPass Runner](https://github.com/enes-telli/SeasonPass) (`enes-telli/SeasonPass`)
* **Stars:** ~23⭐
* **Mechanic:** Fast-Reaction Clothing & Season Gates
* **Overview:**
  The runner track transitions between weather conditions (Summer, Winter, Rain). The player must quickly choose correct outfit items along the path; picking two incorrect items leads to level failure.

---

### 6. [Hyper Casual Runner](https://github.com/botmeo/Hyper-Casual-Runner) (`botmeo/Hyper-Casual-Runner`)
* **Stars:** ~38⭐
* **Mechanic:** Racing Obstacle Runner
* **Overview:**
  A polished starter kit for runner games featuring smooth swipe-based swerve controls, modular track segments, and clean level win/lose evaluation loops.

---

## 🎯 2. Physics, Timing & Voodoo/Ketchapp/SayGames Replicas

### 1. [Helix Jump Replica](https://github.com/almiraolcer/Helix-Jump-By-Almi) (`almiraolcer/Helix-Jump-By-Almi`)
* **Stars:** ~25⭐
* **Mechanic:** Cylindrical Tower Rotation & Bouncing Physics
* **Overview:**
  A replica of Voodoo’s iconic title *Helix Jump*. A bouncing ball stays locked on the Y-axis while the player rotates the multi-tiered cylindrical tower using horizontal swipe touch input.
* **Key Architecture & Code Highlights:**
  - **Touch-to-Angular Velocity:** Direct touch delta mapping to cylinder rotation with angular damping.
  - **Dynamic Splat Decals:** Instant paint mark instantiation on platform impact surfaces.
  - **Combo Detection:** Consecutive multi-tier drop detection triggering super-fall speed and hazard destruction.

---

### 2. [Unity Hole vs Colors (Color Hole 3D)](https://github.com/herbou/Unity_HoleVsColors) (`herbou/Unity_HoleVsColors`)
* **Stars:** ~70⭐
* **Mechanic:** Stencil Ground Hole & Dynamic Physics Suction
* **Overview:**
  A faithful implementation of *Color Hole 3D*. Players drag a circular hole across a flat board to swallow white physics blocks while avoiding any contact with colored hazard blocks.
* **Key Architecture & Code Highlights:**
  - **Shader Stencil Masking:** Stencil buffer rendering cuts a transparent hole through the ground plane mesh without altering the underlying geometry.
  - **Gravity Well & Physics Triggers:** Disables ground colliders directly inside the hole radius so physics objects fall through naturally under gravity.

---

### 3. [3D Casual Games Collection](https://github.com/SinlessDevil/CasualGamesCollection) (`SinlessDevil/CasualGamesCollection`)
* **Stars:** ~40⭐
* **Overview:**
  A multi-game repository providing three complete, playable hypercasual classics:
  1. **Chain Cube 2048:** Slide and shoot numbered cubes that bounce, flip, and fuse into higher numbers upon colliding with identical digits.
  2. **Roller Splat:** Sponge ball puzzle that glides across grid corridors, painting every tile on contact.
  3. **Color Hole 3D:** Ground hole swallowing physics puzzle.

---

### 4. [Slice It All Clone](https://github.com/ali-caglar/Hyper-SliceItAll) (`ali-caglar/Hyper-SliceItAll`)
* **Stars:** ~21⭐
* **Mechanic:** Tap-to-Flip Physics & Knife Sticking
* **Overview:**
  Inspired by SayGames’ *Slice It All*. Each screen tap delivers an upward rotational torque impulse to the knife, flipping it forward. Slicing through fruit and blocks awards points; landing blade-first sticks the knife into targets.
* **Key Architecture & Code Highlights:**
  - Physics torque calculations on tap input.
  - Raycast tip checking to freeze knife velocity and stick into static objects.

---

### 5. [Tornado Smash](https://github.com/bariscanyilmaz/tornado-smash) (`bariscanyilmaz/tornado-smash`)
* **Stars:** ~19⭐
* **Mechanic:** Voxel Deconstruction & Debris Suction
* **Overview:**
  Players guide a tornado across city blocks. The tornado pulls buildings apart into hundreds of individual physics debris cubes, absorbing mass to grow larger in scale.

---

### 6. [ZigZag](https://github.com/shubham-saudolla/ZigZag) (`shubham-saudolla/ZigZag`)
* **Stars:** ~20⭐
* **Mechanic:** Single-Tap 90-Degree Direction Toggle
* **Overview:**
  A minimalist implementation of Ketchapp’s *ZigZag*. Every tap alternates the rolling ball's forward velocity vector between 45° left and 45° right on an endlessly spawning procedural pathway.

---

## 🧩 3. Puzzles, Sorting & Drawing

### 1. [Match 3D Mechanic](https://github.com/cengizhankervanci/Match_3D) (`cengizhankervanci/Match_3D`)
* **Stars:** ~60⭐
* **Mechanic:** 3D Physics Object Pairing
* **Overview:**
  A pit filled with dozens of chaotic, physics-enabled 3D toys. Players pick and drag matching pairs onto a scanner plate to clear items against a ticking level countdown timer.
* **Key Architecture & Code Highlights:**
  - **Screen-to-World Raycast Drag:** Touch input maps to 3D world plane drag with physics constraints.
  - **Match Pair Validator:** Tag/ID comparison logic that triggers merge animations via DOTween before destroying matched entities.

---

### 2. [DrawRush HyperCasual](https://github.com/KaanEkimoz/DrawRush-HyperCasual) (`KaanEkimoz/DrawRush-HyperCasual`)
* **Stars:** ~43⭐
* **Mechanic:** Real-Time Physics Line Drawing (Draw Climber style)
* **Overview:**
  The player draws line shapes on a designated bottom canvas. The drawn line points are converted into physics `EdgeCollider2D` or 3D mesh wheels attached to a rolling vehicle body in real time.

---

### 3. [Amaze Clone](https://github.com/mbilalbark/amaze-clone) (`mbilalbark/amaze-clone`)
* **Stars:** ~44⭐
* **Mechanic:** Grid Fill Swipe Puzzle
* **Overview:**
  Swipe gestures send a rolling sponge ball sliding in cardinal directions until it strikes a boundary wall, splashing color onto every visited tile. The level completes once 100% of tiles are painted.

---

### 4. [Sort It 3D](https://github.com/bariscanyilmaz/sortit3d) (`bariscanyilmaz/sortit3d`)
* **Stars:** ~2⭐
* **Mechanic:** Color Tube Sorting
* **Overview:**
  A clean implementation of the popular mobile sorting puzzle. Players tap glass test tubes to pop and drop colored balls, organizing matching colors into separate tubes.

---

## 🚜 4. Idle Arcade & Resource Stacking

### 1. [Hypercasual Idle Game Mechanic](https://github.com/VladyslavNadeev/Hypercasual-Idle-Game) (`VladyslavNadeev/Hypercasual-Idle-Game`)
* **Stars:** ~43⭐
* **Mechanic:** Virtual Joystick, Backpack Stacking & Upgrade Pads
* **Overview:**
  A prototype of the "Idle Arcade" subgenre (pioneered by *My Little Universe* and *Lumbercraft*). The player controls a character with a virtual joystick, collects wood/stone, stacks bundles on their back, and deposits them onto upgrade pads to construct buildings.
* **Key Architecture & Code Highlights:**
  - **Dynamic Backpack Stacking:** Stacked resource items follow the player’s spine position and rotation with damping sway physics.
  - **Zone Interaction:** Trigger volumes with radial timer fills that deduct resources and unlock new floor expansions.

---

### 2. [Idle Action Farm](https://github.com/citrongames/Idle-Action-Farm) (`citrongames/Idle-Action-Farm`)
* **Stars:** ~35⭐
* **Mechanic:** Crop Harvesting, Upgrades & Customer Queuing
* **Overview:**
  The player runs around harvesting crops with a sickle, carries crates of harvested vegetables to customer counters, collects floating cash stacks, and reinvests earnings into automated farm workers.

---

## 🏗️ 5. Architecture Templates & Developer Toolkits

### 1. [HyperTemplate](https://github.com/SinanErmis/HyperTemplate) (`SinanErmis/HyperTemplate`)
* **Stars:** ~60⭐
* **License:** MIT
* **Overview:**
  An architecture framework specifically built for rapid hypercasual prototyping. Solves the boilerplate code required when starting new mobile prototypes every week.
* **Core Systems Included:**
  - **Finite State Machine (FSM):** Clean separation between `InitState`, `MenuState`, `GameplayState`, `WinState`, and `FailState`.
  - **Generic Object Pooler:** Avoids memory allocations during rapid projectile/particle spawning.
  - **Level Progression Manager:** Level cycling, restart, and persistent progress saving via `PlayerPrefs`.
  - **Juice & Polish Utilities:** Pre-configured DOTween feedback hooks (scale pops, screen shakes, coin flight FX).

---

### 2. [Awesome Hyper Casual](https://github.com/SinanErmis/awesome-hyper-casual) (`SinanErmis/awesome-hyper-casual`)
* **Stars:** ~107⭐
* **Overview:**
  A curated directory of hypercasual game development resources:
  - Free rigged stickman 3D assets (compatible with Mixamo).
  - Mobile toon shaders and lightweight outline effects.
  - Open-source on-screen virtual joysticks (Joystick Pack).
  - User acquisition, CPI testing metrics, and ad placement guides.

---

### 3. [TapTap Game Template](https://github.com/vadercat/TapTap-Game-Template-Project) (`vadercat/TapTap-Game-Template-Project`)
* **Stars:** ~25⭐
* **Overview:**
  A lightweight mobile template tailored for single-touch / tap-to-act games, featuring responsive UI canvas scaling, audio management, and score tracking.

---

## 🛠️ 6. Hypercasual Core Development Patterns

When developing hypercasual games in Unity, successful projects consistently employ these technical and design patterns:

### 1. Input Handling Patterns
* **Swerve Input:** Rather than reading absolute screen positions, calculate horizontal drag delta `(touch.deltaPosition.x / Screen.width)` clamped to track boundaries.
* **Single-Tap Timing:** Listen to `Input.GetMouseButtonDown(0)` or `TouchPhase.Began` to fire instantaneous torque impulses or toggle 90° direction switches.

### 2. "Juice" & Game Feel (DOTween)
* Hypercasual games rely heavily on procedural tweens rather than heavy animation clips:
  * **Scale Pop:** `transform.DOPunchScale(Vector3.one * 0.2f, 0.2f, 10, 1)` on item pickup.
  * **Currency Flight:** Spawning 10 UI coin sprites that tween along a Bezier curve to the coin counter using DOTween sequences.
  * **Camera Shake:** Subtle impulse on collision or level fail to reinforce impact.

### 3. Memory & Garbage Collection (GC) Optimization
* **Object Pooling:** Never call `Instantiate()` or `Destroy()` during active gameplay (e.g., crowd runners with 50+ stickmen). Pre-warm object pools in `Awake()`.
* **Zero-Allocation Physics:** Use `Physics.OverlapSphereNonAlloc()` and `Physics.RaycastNonAlloc()` with pre-allocated hit arrays to avoid mobile frame drops.

### 4. Rapid Iteration Architecture
* Keep gameplay rules isolated inside ScriptableObjects (Player Speed, Stack Multipliers, Gate Modifiers) so game designers can tune parameters live in the Unity Editor during playtesting without recompiling scripts.
