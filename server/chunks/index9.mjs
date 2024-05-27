import { a as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';

const index = defineEventHandler(async () => {
  const data = [
    {
      id: 0,
      name: "Website Redesign",
      customer: "Blake & Mortimer",
      duration: "3 months",
      picture: "/img/photos/abstracts/1.png",
      industry: "HR Vetting",
      status: "In Progress",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 1,
          picture: void 0,
          initials: "JP",
          color: "info"
        },
        {
          id: 2,
          picture: "/images/avatars/11.svg",
          initials: "EK",
          color: "h-purple"
        },
        {
          id: 3,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "danger"
        },
        {
          id: 4,
          picture: void 0,
          initials: "SC",
          color: "success"
        }
      ]
    },
    {
      id: 1,
      name: "Mobile App Rework",
      customer: "Pollos Hermanos",
      duration: "2 months",
      picture: "/img/photos/abstracts/2.png",
      industry: "Food",
      status: "In Progress",
      team: [
        {
          id: 148,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 2,
      name: "ERP Solution Development",
      customer: "Best Mart",
      duration: "6 months",
      picture: "/img/photos/abstracts/3.png",
      industry: "Distribution",
      status: "Paused",
      team: [
        {
          id: 127,
          picture: void 0,
          initials: "BT",
          color: "success"
        },
        {
          id: 7,
          picture: "/img/avatars/7.svg",
          initials: "AC",
          color: "h-purple"
        },
        {
          id: 19,
          picture: "/img/avatars/19.svg",
          initials: "GK",
          color: "h-yellow"
        },
        {
          id: 148,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 149,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 3,
      name: "Website Proof Of Concept",
      customer: "Los Fragueros",
      duration: "1 month",
      picture: "/img/photos/abstracts/4.png",
      industry: "Clothing",
      status: "In Progress",
      team: [
        {
          id: 188,
          picture: void 0,
          initials: "BT",
          color: "success"
        },
        {
          id: 187,
          picture: void 0,
          initials: "AT",
          color: "h-yellow"
        },
        {
          id: 5,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        }
      ]
    },
    {
      id: 4,
      name: "Add an Accouting Module",
      customer: "WorkForce",
      duration: "3 weeks",
      picture: "/img/photos/abstracts/5.png",
      industry: "Software",
      status: "In Progress",
      team: [
        {
          id: 18,
          picture: "/img/avatars/18.svg",
          initials: "EC",
          color: "info"
        }
      ]
    },
    {
      id: 5,
      name: "New UX Exploration",
      customer: "WorkForce",
      duration: "3 weeks",
      picture: "/img/photos/abstracts/6.png",
      industry: "Software",
      status: "In Progress",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: "/img/avatars/11.svg",
          initials: "KL",
          color: "danger"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 152,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 154,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 6,
      name: "Ordering App Development",
      customer: "Find Your Stuff",
      duration: "5 months",
      picture: "/img/photos/abstracts/7.png",
      industry: "Retail",
      status: "In Progress",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: void 0,
          initials: "AT",
          color: "h-yellow"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 152,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 7,
      name: "Learning App for Children",
      customer: "Coding Kids",
      duration: "2 months",
      picture: "/img/photos/abstracts/8.png",
      industry: "Education",
      status: "In Progress",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: void 0,
          initials: "BV",
          color: "h-purple"
        },
        {
          id: 8,
          picture: "/images/avatars/11.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 8,
      name: "App Wireframe Implementation",
      customer: "Freako",
      duration: "2 weeks",
      picture: "/img/photos/abstracts/9.png",
      industry: "Retail",
      status: "In Progress",
      team: [
        {
          id: 25,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 13,
          picture: "/img/avatars/13.svg",
          initials: "TS",
          color: "info"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        }
      ]
    },
    {
      id: 9,
      name: "Corporate Social Network",
      customer: "Publicis",
      duration: "5 months",
      picture: "/img/photos/abstracts/9.png",
      industry: "Media",
      status: "In Progress",
      team: [
        {
          id: 7,
          picture: "/img/avatars/7.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 165,
          picture: void 0,
          initials: "JD",
          color: "info"
        },
        {
          id: 27,
          picture: "/img/avatars/27.svg",
          initials: "CE",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    }
  ];
  return data;
});

export { index as default };
