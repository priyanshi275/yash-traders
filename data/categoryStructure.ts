export const categoryStructure = {
  hardware: {
    title: "Hardware",
    subCategories: {
      "Locks & Door Fittings": [
        "Mortise Lock",
        "Door Lock",
        "Padlock",
        "Drawer Lock",
        "Aldrops",
        "Door Handles",
        "Tower Bolt",
      ],

      "Kitchen & Wardrobe Fittings": [
        "Telescopic Channel",
        "Slimbox",
        "Baskets",
        "Cabinet Handles",
        "Hinges",
        "Tower Bolts",
        "Profile",
        "Marble Tower Bolt",
      ],
    },
  },

  "bathroom-fittings": {
    title: "Bathroom Fittings",
    subCategories: {
      "CPVC & PVC Pipes": [
        "CPVC Pipes",
        "PVC Pipes",
        "CP Fittings",
      ],

      "Bathroom Products": [
        "Toilet Sheets",
        "Bathroom / Kitchen Mixture",
        "Health Faucet Sets",
        "Wash Basin",
        "Angle Valve Taps",
        "Shower",
        "Solvent",
      ],
    },
  },

  adhesives: {
    title: "Adhesives",
    subCategories: {
      Adhesives: [
        "Hyper",
        "Marine",
        "S.H",
        "Master Lock",
        "Heatex",
        "Pro Bond",
        "Nail Free",
        "Silicon",
        "Relame",
        "Polyfix",
      ],
    },
  },

  tools: {
    title: "Tools & Machinery",
    subCategories: {
      "Hand Tools": [
        "Hammer",
        "Screw Driver",
        "Blades",
        "D Spanner / Ring Spanner",
        "Goty",
        "Pincer",
        "Jack Planner",
      ],

      "Power Tools": [],
    },
  },

  electrical: {
    title: "Electrical",
    subCategories: {
      Switch: [
        "Switch",
        "Sockets & Plates",
        "Modular Box",
        "Combine Box",
        "Bulbs & Tube Lights",
        "Panels & Surface Lights",
        "Wires",
        "MCBs",
      ],
    },
  },

  paints: {
    title: "Paints",
    subCategories: {
      Paints: [
        "Enamel",
        "Wall Paints",
        "Emulsion",
        "Distemper",
        "Thinner",
      ],
    },
  },
};

export type CategoryStructure = typeof categoryStructure;