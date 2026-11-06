---
order: 1
title: Pilot weather decision support | Sébastien Boulnois, PhD
description: PhD research designing and evaluating OWSAS, a 3D weather situation awareness system, with expert airline pilots in a Boeing 737-800 simulator.
heading: Helping pilots see where convective weather is heading
context: PhD research, Florida Tech
years: 2015–2018
lead: Convective weather is one of the main causes of accidents in the US airspace system. My dissertation asked how 2D and 3D weather information, with interaction features, could affect airline pilots' weather situation awareness and decision-making. I designed and evaluated OWSAS, an onboard 3D weather system, over three design cycles.
summary:
  - term: Role
    detail: Lead researcher and designer. Advisor, Dr. Lucas Stephane
  - term: Setting
    detail: Human-Centered Design Institute, Boeing 737-800 cockpit simulator
  - term: Participants
    detail: 15 expert airline pilots interviewed; 5 and 6 pilots in the two main evaluations
  - term: Methods
    detail: Grounded theory, participatory design, rapid prototyping, pilot-in-the-loop simulation
  - term: Measures
    detail: SAGAT-style situation awareness probes, CC-SART, NASA-TLX, SUS, risk information seeking (RISP)
  - term: Outcome
    detail: PhD in Human-Centered Design, 2018. Dissertation, "Human-Centered Design of a 3D-Augmented Strategic Weather Management System for the Aviation Community"
---

## The problem

Convective weather such as thunderstorms brings wind shear, turbulence and hail. Pilots told us its vertical structure is poorly understood, partly because training covers it lightly, and onboard weather radar shows mostly a 2D slice. Current ground-air services limit how well crews can build and update a picture of the weather around them.

## Understanding how pilots manage weather

I started by taking meteorology classes, then ran a grounded theory study: in-depth, semi-structured interviews with 15 expert airline pilots, each with at least 1,000 hours as an airline transport pilot. The interviews traced how pilots build weather awareness from the pre-flight briefing to in-flight decisions, and fed a knowledge base used throughout the project.

{% figure "pilot-interview-cockpit-lab", "Sébastien interviewing an expert airline pilot in the cockpit design lab, with a simulator screen in the background.", "Knowledge elicitation with an expert pilot in the cockpit design lab.", 800, 442 %}

The interviews showed how much work the onboard radar leaves to the pilot. Radar shows one slice of weather at a time, so pilots keep adjusting it and assembling slices in their head until they have a 3D picture. That loop takes experience and skill, and it fails in three ways:

1. **The radar can miss weather.** With severe convective weather, the beam can be blocked, leaving a "shadow" behind the strongest cells.
2. **One slice is not a 3D picture.** Pilots see top-down 2D information for one flight level at a time, which makes 3D awareness hard to build in a time-critical situation.
3. **Deviating takes time.** Getting clearance from air traffic control adds delay to a decision that is already late.

{% diagram "weather-radar-decision-loop", "Flowchart. A pilot sees weather outside the cockpit, or wants to keep weather awareness, and uses the onboard radar. Inside a loop marked 'takes experience and skill', the pilot reads one slice of weather at the current tilt, range and gain, then asks whether it is enough to build a 3D picture of the weather. If not, the pilot adjusts tilt, range or gain and reads again. If so, the pilot decides whether avoiding the weather is necessary, and if it is, requests a deviation from air traffic control.", "How pilots build a weather picture with onboard radar, from the interview findings.", 420, 600 %}

## Designing with pilots

Instead of designing in isolation, I brought early concepts to pilots. A focus group with two experienced airline pilots and our interdisciplinary team steered the visual design toward simple, information-rich 3D storm cells: colour-coded, semi-transparent, and sliceable by altitude.

{% figure "participatory-design-session", "A participatory design session: a researcher sketches on a whiteboard while two pilots discuss weather display ideas.", "Participatory design session with expert pilots and the design team.", 800, 401 %}

Across three years I built three generations of the Onboard Weather Situation Awareness System (OWSAS) on an iPad. OWSAS-3.3, the last version, combined a bird's-eye 2D map with an exocentric 3D view of storm cells, and a timeline showing how each cell's intensity and movement would evolve.

{% figure "owsas-3-3-interface", "The OWSAS-3.3 interface on an iPad: a 3D view of storm cells with altitude labels above a 2D map showing the flight path and precipitation intensity.", "OWSAS-3.3: an exocentric 3D view above a 2D map, with a weather-evolution timeline.", 800, 592 %}

I also proposed an architecture for OWSAS-3 to address these problems: ground-based NEXRAD weather that the radar shadow cannot hide, a 3D globe to show storm cells in volume, and live aircraft and flight-plan data from the B737 simulator so pilots could see their position against the weather and plan ahead.

{% diagram "owsas-system-architecture", "System diagram. Weather data from the NEXRAD network feeds OWSAS directly. Map data from NASA and Mapbox feeds a WhirlyGlobe 3D globe, which feeds OWSAS. Flight plan data from ProSim737 feeds the flight management system, which feeds OWSAS. OWSAS and the flight management system sit inside the Boeing 737-800 cockpit simulator. Aircraft data, meaning position, attitude and speed, also feeds OWSAS.", "The proposed OWSAS-3 architecture, integrating weather, map, flight-plan and aircraft data.", 420, 440 %}

## Evaluation 1: the standalone tablet (OWSAS-3.2)

An exploratory study with five pilots (three airline pilots averaging 16,833 flight hours, and two private pilots) flying a Miami to Denver scenario with developing convective weather.

- All five completed the scenario and correctly answered the situation awareness perception and projection questions.
- Usability scored 97/100 on the SUS, and cognitive compatibility 94/100 on CC-SART.
- The tablet was tested outside the simulator, so workload results show trends only.

## Evaluation 2: in the B737 simulator (OWSAS-3.3)

Six airline pilots, averaging 13,083 flight hours, each flew the same night scenario twice in a Boeing 737-800 simulator: waiting for takeoff with convective weather near the airport. One run used an iPad navigation display, the other OWSAS-3.3.

{% figure "owsas-b737-simulator-test", "A pilot in the Boeing 737 simulator using OWSAS on a tablet, pointing at red storm cells on the screen.", "A pilot evaluating OWSAS-3.3 in the Boeing 737-800 simulator.", 800, 450 %}

**What changed**

- **Situation awareness:** with OWSAS-3.3, every pilot could perceive the height of the storm cells, and the evolution feature let them describe how the weather would move and intensify. With the navigation display, the cells were too close for its tilt to show their height, and pilots could barely describe how the weather would evolve.
- **Information sufficiency** (RISP) was higher with OWSAS-3.3, thanks to the integrated weather height and evolution information.
- **Cognitive compatibility:** 92.6/100 for OWSAS-3.3, against 81.6/100 for the navigation display.
- **Usability** was rated "excellent" for OWSAS-3.3 and "good" for the navigation display.
- **Workload:** mental, manual and temporal demand and effort were lower with OWSAS-3.3, and self-rated performance was better. Visual demand was the same. Frustration was slightly higher, because of design issues such as where the evolution timeline sat.

**What didn't change**

- **Decisions:** five of the six pilots made the same takeoff decision with both displays. One pilot took off with OWSAS-3.3, confident he could leave before the weather arrived, but chose to wait with the navigation display because he couldn't tell how the weather was evolving. Better situation awareness did not, in this scenario, cross the threshold for a different decision.
- **Weather extent:** without a distance scale, pilots found it harder to judge the width and depth of cells in OWSAS-3.3 than on the navigation display.

## What it means

The results were positive but mostly qualitative, and the evaluations were formative with small samples. The iPad navigation display also lacked some features of a real one. The dissertation's own conclusion: OWSAS-3.3 increased pilots' situation awareness, while their decision-making was overall not affected in the chosen scenario.

Pilots' top three improvements were a distance scale in the 2D view, altitude reference lines in the 3D view, and clearer weather update times. The next step would be testing more flight phases, such as cruise and approach, with larger samples and a full-fidelity navigation display.
