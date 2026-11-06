---
order: 4
title: Firefighter-robot cooperation | Sébastien Boulnois, PhD
description: Field research with firefighting crews during a large crisis exercise, and a proof of concept for how firefighters could direct teams of robots in hazardous environments.
heading: How firefighters and robots could work as one team
context: LAMIH, Université Polytechnique Hauts-de-France
years: 2014–2015
lead: Firefighters work in places where chemical threats, collapsing structures and zero visibility put their lives at risk. Robots could take on part of that risk, but only if they fit the way crews already work. I studied how firefighters deploy and communicate in a crisis, then built a proof of concept for firefighter-robot cooperation.
summary:
  - term: Role
    detail: Research engineer, working with two senior research engineers
  - term: Setting
    detail: Fire stations, and a full-scale crisis exercise in a soccer stadium
  - term: Participants
    detail: Firefighters, paramedics, police and stadium security, with city stakeholders
  - term: Methods
    detail: Field observation, in-situation interviews, concept prototyping
  - term: Outcome
    detail: A working proof of concept, handed off to a graduate researcher for formal user testing; it helped found a PhD thesis
---

## The problem

Robots can extend what firefighters are able to do in hostile environments. But a robot that ignores how a crew is organised, how it communicates and how it decides under stress adds work instead of removing risk. The research had to start with how firefighters actually operate.

## Observing a crisis response

We visited fire stations and interviewed firefighters in their work settings about how they make decisions and communicate during a crisis.

{% figure "fire-station-command-post", "A firefighter at a fire station command post, facing a whiteboard and several monitors showing status screens.", "A fire station command post, where we interviewed crews about deployment and communication.", 800, 600 %}

We then observed a live crisis exercise: a simulated fight in a soccer stadium, involving firefighters, paramedics, police and security guards. Hundreds of volunteers played fans, some of them with simulated injuries. We followed the response from the command level and from the stadium's security camera room.

{% figure "stadium-exercise-command-view", "Two observers seen from behind, looking out over an empty soccer stadium from a high window.", "The exercise seen from the command level, overlooking the stadium.", 800, 600 %}

{% figure "stadium-security-camera-room", "Security staff at desks in a control room, facing a wall of camera monitors showing the stadium.", "The stadium security team following the exercise on its camera wall.", 800, 600 %}

## What we found

**A pyramid command structure.** Firefighters deploy in pairs under a chief, and chiefs form their own hierarchy as the response grows. This told us how a robot system would need to scale, and which way information would need to flow.

**No shared picture of the crisis.** The teams reported casualties and conditions in noticeably different ways. Two gaps stood out:

- No consistent terminology or mental model across the emergency teams
- Little technology that worked in high-pressure, low-visibility conditions

## Building the proof of concept

I combined these findings with existing research on human-machine cooperation to build an early proof of concept. Its purpose was to show that firefighter-robot cooperation was feasible and could scale with the size of a team.

{% figure "firefighter-robot-proof-of-concept", "A joystick and two tracked robots built from Lego Mindstorms beside a laptop showing a control interface with three video panels.", "The proof of concept: joystick control, two sensor-equipped robots, and the control interface.", 800, 421 %}

The system had three parts:

1. **A modular control interface** for firefighters, with simple toggles and live feedback.
2. **Lego Mindstorms robots** carrying infrared, ultrasound and video sensors.
3. **A Wi-Fi and Bluetooth link** pairing the interface with the robots.

Firefighters could add or remove robots to match the scenario, see each robot's video and sensor feeds, and switch each robot between manual, semi-autonomous and autonomous modes. They could also drive a robot with a joystick, open a communication channel on demand, and assign tasks.

{% figure "firefighter-robot-sensors", "Close-up of a tracked Lego Mindstorms robot fitted with a camera, a blue light and ultrasound sensors.", "One of the robots, fitted with video, infrared and ultrasound sensors.", 800, 837 %}

## What it led to

The proof of concept drew strong interest from firefighters in practical robotic support. I handed it off to a graduate researcher for formal user testing and further development, and the work helped found a PhD thesis. The gaps we observed in shared situation awareness also pointed to where firefighters' communication training could focus.
