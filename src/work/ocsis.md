---
order: 2
title: Context-sensitive documentation for pilots | Sébastien Boulnois, PhD
description: Designing and testing OCSIS, an onboard procedure system driven by live aircraft data, in an Airbus A320 simulator with expert pilots.
heading: Context-sensitive documentation for pilots
context: Florida Tech research internship
years: "2014"
lead: During abnormal and emergency events, pilots juggle procedures scattered across paper manuals and devices. I designed and tested OCSIS, an iPad system that shows the right procedure step at the right time, driven by live aircraft data.
summary:
  - term: Role
    detail: Research intern, Human-Centered Design Institute, Florida Institute of Technology
  - term: Setting
    detail: Airbus A320 cockpit simulator
  - term: Participants
    detail: Expert airline pilots
  - term: Methods
    detail: Expert interviews, knowledge modelling, prototyping, pilot-in-the-loop simulation
  - term: Measures
    detail: Situation awareness, workload, usability
  - term: Outcome
    detail: Presented at the 19th Triennial Congress of the International Ergonomics Association, Melbourne, 2015
---

## The problem

Commercial pilots rely on paper manuals and several electronic systems to run flight procedures. In a system failure, searching static documents adds mental workload and slows decisions, at exactly the moment the crew has the least spare capacity.

This was my first project with pilots, and the one that convinced me to make this my career. Working under a pilot instructor and her PhD mentor, my goal was to understand the challenges pilots face with onboard procedures, and to design a system that delivers the right operational information, at the right time, in the right format, without adding cognitive load.

## What pilots needed

Interviews with expert pilots pointed to four needs:

- An interactive system usable in flight, in place of static, linear documents
- Information that adapts to real-time aircraft parameters
- Support for situation awareness in both normal and abnormal scenarios
- A tangible device that fits existing cockpit workflows

## Designing the system

I built a knowledge structure linking each pilot action to the aircraft data that confirms it and to the procedure logic that follows. For example, when the crew sets the flaps lever to position 2, the system compares lever position with actual flap position. If they match, the crew continues the normal procedure. If they don't, the system opens the troubleshooting procedure.

{% figure "ocsis-flaps-procedure-logic", "Flow diagram of the flaps example. During approach, the goal is to set flaps to position 2. The system watches the flaps lever position and the actual flap position. If they match, the crew continues with the next normal procedure. If they differ, the troubleshooting procedure starts.", "Procedure logic for a flaps setting during approach: matching lever and flap positions continue the normal procedure; a mismatch starts troubleshooting.", 800, 889 %}

The iPad prototype digitised the flight procedures and used a colour code aligned with Airbus ECAM conventions: cyan for steps to do, amber for postponed steps, green for completed steps. Procedure steps updated automatically from flight data.

{% figure "ocsis-ipad-prototype", "The OCSIS prototype on an iPad, showing an after-start checklist with completed steps in green, a postponed step in amber and remaining steps in cyan.", "The OCSIS prototype, with steps colour-coded to match Airbus ECAM conventions.", 800, 800 %}

## Testing in the simulator

I connected OCSIS to the sensor data of an on-site Airbus A320 simulator and mounted the tablet in the cockpit on the pilot-not-flying side. I then designed pilot-in-the-loop sessions comparing OCSIS with paper documentation and the existing systems, in two abnormal scenarios:

- **Flaps malfunction:** during approach, the crew commands a flap setting the aircraft cannot reach.
- **Fuel leak:** a leak develops mid-flight and triggers an abnormal situation.

{% figure "a320-simulator", "The Airbus A320 fixed-base cockpit simulator at Florida Tech, with wraparound outside-view screens.", "The A320 simulator used for the evaluations.", 800, 600 %}

## Results

- **Workload:** across the tested malfunctions, pilots' average workload was lower with OCSIS than with paper documentation and current systems.
- **Situation awareness:** pilots were more aware of the malfunctions when using OCSIS.
- **Usability:** pilots found the system easy to use and well integrated. One described it as providing "the right info at the right time".

The work was presented at the 19th Triennial Congress of the International Ergonomics Association in Melbourne as a model for context-aware cockpit tools.
