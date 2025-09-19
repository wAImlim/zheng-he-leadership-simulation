const { useState } = React;

// Icon components
const ChevronRight = ({ className }) => <span className={className}>→</span>;
const Ship = ({ className }) => <span className={className}>🚢</span>;
const Users = ({ className }) => <span className={className}>👥</span>;
const Globe = ({ className }) => <span className={className}>🌍</span>;
const Star = ({ className }) => <span className={className}>⭐</span>;
const Crown = ({ className }) => <span className={className}>👑</span>;
const Compass = ({ className }) => <span className={className}>🧭</span>;

// Game scenarios data
const scenarios = [
  {
    id: 1,
    title: "Assembling Your Fleet",
    location: "Nanjing, 1405",
    description: "Emperor Yongle has entrusted you with leading the treasure fleet to the Western Oceans. You must select your crew and prepare for the journey ahead.",
    situation: "You have 27,800 crew members to organize across 317 ships. Your admirals present different approaches for crew assignment and fleet organization.",
    choices: [
      {
        text: "Personally interview key officers and inspire them with the vision of bringing glory to China",
        leadership: { transformational: 3, authentic: 2, pathGoal: 1 },
        effects: { crewMorale: 10, fleetCohesion: 5, reputation: 3 }
      },
      {
        text: "Establish clear hierarchies and reward systems based on performance metrics",
        leadership: { transactional: 3, situational: 1, pathGoal: 2 },
        effects: { fleetCohesion: 8, resources: 5, crewMorale: 3 }
      },
      {
        text: "Adapt crew assignments based on each sailor's experience level and motivation",
        leadership: { situational: 3, pathGoal: 2, authentic: 1 },
        effects: { crewMorale: 8, fleetCohesion: 8, resources: -2 }
      }
    ]
  },
  {
    id: 2,
    title: "The Monsoon Challenge",
    location: "South China Sea, 2 months into voyage",
    description: "Unexpected monsoon winds have scattered part of your fleet. Some ships are missing, and crew morale is dropping as supplies run low.",
    situation: "Three of your treasure ships have been separated from the main fleet. Your navigators are divided on whether to wait for them or continue to the planned port. The crew looks to you for decisive action.",
    choices: [
      {
        text: "Rally the crew with speeches about duty and perseverance, then lead a search mission personally",
        leadership: { transformational: 2, authentic: 3, pathGoal: 1 },
        effects: { crewMorale: 12, reputation: 8, resources: -5 }
      },
      {
        text: "Implement emergency protocols and offer bonus payments to volunteers for the search mission",
        leadership: { transactional: 3, situational: 2 },
        effects: { fleetCohesion: 6, resources: -8, crewMorale: 5 }
      },
      {
        text: "Assess crew readiness levels and assign tasks based on individual capabilities and confidence",
        leadership: { situational: 3, pathGoal: 3 },
        effects: { crewMorale: 8, fleetCohesion: 10, resources: -3 }
      }
    ]
  },
  {
    id: 3,
    title: "First Diplomatic Encounter",
    location: "Champa (Modern-day Vietnam)",
    description: "You arrive at the court of the Cham King. This is your first major diplomatic test - how you handle this will set the tone for future encounters.",
    situation: "The Cham King questions China's intentions and seems hesitant to engage in trade. Your interpreters suggest different approaches, and your crew watches how you handle this delicate situation.",
    choices: [
      {
        text: "Share your personal vision of peaceful cooperation and mutual prosperity",
        leadership: { transformational: 3, authentic: 3 },
        effects: { diplomaticRelations: 15, reputation: 10, crewMorale: 5 }
      },
      {
        text: "Present clear trade agreements with specific benefits and expectations",
        leadership: { transactional: 2, pathGoal: 3 },
        effects: { resources: 10, diplomaticRelations: 8, fleetCohesion: 3 }
      },
      {
        text: "Observe the king's concerns first, then adapt your approach based on his leadership style",
        leadership: { situational: 3, authentic: 2, pathGoal: 1 },
        effects: { diplomaticRelations: 12, reputation: 6, crewMorale: 8 }
      }
    ]
  },
  {
    id: 4,
    title: "Cultural Integration Challenge",
    location: "Palembang, Sumatra",
    description: "Your diverse crew includes Chinese, Malay, and Arab sailors. Cultural tensions arise when different groups clash over religious practices and daily routines.",
    situation: "Arguments have broken out between crew members from different backgrounds. Some officers suggest segregating the groups, while others propose integration activities. Your decision will impact fleet unity.",
    choices: [
      {
        text: "Create a unifying vision that celebrates diversity as strength, leading by example in interactions",
        leadership: { transformational: 3, authentic: 2, pathGoal: 1 },
        effects: { crewMorale: 15, fleetCohesion: 12, reputation: 5 }
      },
      {
        text: "Establish strict rules for interaction and clear consequences for cultural conflicts",
        leadership: { transactional: 3, situational: 1 },
        effects: { fleetCohesion: 8, crewMorale: -3, resources: 3 }
      },
      {
        text: "Work with each cultural group individually, adapting management style to their specific needs",
        leadership: { situational: 3, pathGoal: 2, authentic: 1 },
        effects: { crewMorale: 10, fleetCohesion: 15, resources: -5 }
      }
    ]
  }
];

// Leadership profiles
const profiles = {
  transformational: {
    title: "The Visionary Leader",
    description: "You inspire others through compelling vision and personal charisma. Like Zheng He himself, you lead by example and create meaning beyond immediate tasks.",
    emoji: "🔮"
  },
  transactional: {
    title: "The Strategic Manager", 
    description: "You excel at clear structures, fair exchanges, and systematic approaches. You ensure efficient operations through well-defined processes.",
    emoji: "♟️"
  },
  situational: {
    title: "The Adaptive Commander",
    description: "You skillfully adjust your leadership style based on your team's readiness and the situation at hand. Flexibility is your greatest strength.", 
    emoji: "🎭"
  },
  pathGoal: {
    title: "The Goal-Oriented Guide",
    description: "You excel at helping others see clear paths to success and removing obstacles. You're skilled at matching approach to individual motivation.",
    emoji: "🎯"
  },
  authentic: {
    title: "The Principled Navigator",
    description: "You lead with genuine integrity and strong values. Others trust you because your actions consistently align with your stated beliefs.",
    emoji: "⚖️"
  }
};
