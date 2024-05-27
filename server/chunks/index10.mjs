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
      id: 13,
      picture: "/demo/avatars/13.jpg",
      badge: "/images/icons/stacks/illustrator.svg",
      username: "Tara S.",
      fullName: "Tara Svenson",
      initials: "TS",
      color: "danger",
      location: "New York, NY",
      position: "UI/UX Designer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 37
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "Esteban C.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "John D.",
          initials: "JD",
          color: "info"
        },
        {
          id: 7,
          picture: "/demo/avatars/7.jpg",
          name: "Alice C.",
          initials: "AC",
          color: "success"
        }
      ]
    },
    {
      id: 37,
      picture: "/demo/avatars/37.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "Helmut F.",
      fullName: "Helmut Fritz",
      initials: "HF",
      color: "h-purple",
      location: "Paris, France",
      position: "Product Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 59
      },
      status: "overdue",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "Elizabet F.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 189,
          picture: void 0,
          name: "Alan T.",
          initials: "AT",
          color: "success"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "Alejandro B.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 25,
      picture: "/demo/avatars/25.jpg",
      badge: "/images/icons/stacks/js.svg",
      username: "Melany W.",
      fullName: "Melany Wallace",
      initials: "MW",
      color: "success",
      location: "San Diego, CA",
      position: "Web Developer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 21
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "Elizabet F.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "Alejandro B.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 29,
      picture: "/demo/avatars/29.jpg",
      badge: "/images/icons/stacks/python.svg",
      username: "Hakeem C.",
      fullName: "Hakeem Calami",
      initials: "HC",
      color: "info",
      location: "Berlin, Germany",
      position: "Software Engineer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 11
      },
      status: "synced",
      team: [
        {
          id: 28,
          picture: "/demo/avatars/28.jpg",
          name: "Edouard F.",
          initials: "EF",
          color: "info"
        },
        {
          id: 33,
          picture: "/demo/avatars/33.jpg",
          name: "Harvey M.",
          initials: "HM",
          color: "warning"
        }
      ]
    },
    {
      id: 39,
      picture: "/demo/avatars/39.jpg",
      badge: "/images/icons/stacks/python.svg",
      username: "Alejandro B.",
      fullName: "Alejandro Badajoz",
      initials: "AB",
      color: "h-purple",
      location: "New York, NY",
      position: "Business Analyst",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 17
      },
      status: "blocked",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "Alan T.",
          initials: "AT",
          color: "success"
        },
        {
          id: 23,
          picture: "/demo/avatars/23.jpg",
          name: "Irina V.",
          initials: "IV",
          color: "danger"
        }
      ]
    },
    {
      id: 40,
      picture: "/demo/avatars/40.jpg",
      badge: "/images/icons/stacks/android.svg",
      username: "Jeanne M.",
      fullName: "Jeanne Marchand",
      initials: "JM",
      color: "info",
      location: "Paris, France",
      position: "Mobile Developer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 14
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "Esteban C.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "John D.",
          initials: "JD",
          color: "info"
        }
      ]
    },
    {
      id: 19,
      picture: "/demo/avatars/19.jpg",
      badge: "/images/icons/flags/germany.svg",
      username: "Greta K.",
      fullName: "Greta Kroppfer",
      initials: "GK",
      color: "h-yellow",
      location: "Los Angeles, CA",
      position: "Sales Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 18
      },
      status: "synced",
      team: [
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 27,
          picture: "/demo/avatars/27.jpg",
          name: "Carmen E.",
          initials: "CE",
          color: "info"
        }
      ]
    },
    {
      id: 9,
      picture: "/demo/avatars/9.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Anna B.",
      fullName: "Anna Baker",
      initials: "AB",
      color: "info",
      location: "San Francisco, CA",
      position: "UI/UX Designer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 27
      },
      status: "synced",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "Alan T.",
          initials: "AT",
          color: "success"
        },
        {
          id: 23,
          picture: "/demo/avatars/23.jpg",
          name: "Irina V.",
          initials: "IV",
          color: "danger"
        }
      ]
    },
    {
      id: 5,
      picture: "/demo/avatars/5.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Mary L.",
      fullName: "Mary Lebowski",
      initials: "ML",
      color: "h-yellow",
      location: "San Diego, CA",
      position: "Project Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 31
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "Esteban C.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "John D.",
          initials: "JD",
          color: "info"
        },
        {
          id: 7,
          picture: "/demo/avatars/7.jpg",
          name: "Alice C.",
          initials: "AC",
          color: "success"
        }
      ]
    },
    {
      id: 32,
      picture: "/demo/avatars/32.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Jonathan K.",
      fullName: "Jonathan Krugger",
      initials: "JK",
      color: "info",
      location: "Los Angeles, CA",
      position: "Product Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 9
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "Elizabet F.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "Alejandro B.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 36,
      picture: "/demo/avatars/36.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "Benoit L.",
      fullName: "Benoit Leblanc",
      initials: "BL",
      color: "h-purple",
      location: "Paris, France",
      position: "Software Engineer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 22
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 31,
          picture: "/demo/avatars/31.jpg",
          name: "Yasseen A.",
          initials: "YA",
          color: "h-purple"
        }
      ]
    },
    {
      id: 38,
      picture: "/demo/avatars/38.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Christie D.",
      fullName: "Christie Dallas",
      initials: "CD",
      color: "info",
      location: "Los Angeles, CA",
      position: "Web Developer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 43
      },
      status: "overdue",
      team: [
        {
          id: 33,
          picture: "/demo/avatars/33.jpg",
          name: "Harvey M.",
          initials: "HM",
          color: "warning"
        },
        {
          id: 26,
          picture: "/demo/avatars/26.jpg",
          name: "Courtney W.",
          initials: "CW",
          color: "info"
        }
      ]
    },
    {
      id: 26,
      picture: "/demo/avatars/26.jpg",
      badge: "/images/icons/flags/australia.svg",
      username: "Courtney W.",
      fullName: "Courtney Wilson",
      initials: "CW",
      color: "info",
      location: "Melbourne, AU",
      position: "Web Developer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 13
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "Elizabet F.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 189,
          picture: void 0,
          name: "Alan T.",
          initials: "AT",
          color: "success"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "Alejandro B.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 16,
      picture: "/demo/avatars/16.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Jason G.",
      fullName: "Jason Guarank",
      initials: "JG",
      color: "danger",
      location: "Houston, TX",
      position: "Business Analyst",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 39
      },
      status: "synced",
      team: [
        {
          id: 14,
          picture: "/demo/avatars/14.jpg",
          name: "Ryan B.",
          initials: "RB",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 23,
      picture: "/demo/avatars/23.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Irina V.",
      fullName: "Irina Vierbovsky",
      initials: "IV",
      color: "info",
      location: "San Jose, CA",
      position: "Project Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 7
      },
      status: "synced",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "Alan T.",
          initials: "AT",
          color: "success"
        },
        {
          id: 34,
          picture: "/demo/avatars/34.jpg",
          name: "Daniel R.",
          initials: "DR",
          color: "h-yellow"
        }
      ]
    },
    {
      id: 28,
      picture: "/demo/avatars/28.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "Edouard F.",
      fullName: "Edouard Falant",
      initials: "EF",
      color: "success",
      location: "Paris, France",
      position: "Web Developer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 19
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "Esteban C.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "John D.",
          initials: "JD",
          color: "info"
        }
      ]
    },
    {
      id: 7,
      picture: "/demo/avatars/7.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Alice C.",
      fullName: "Alice Carasca",
      initials: "AC",
      color: "info",
      location: "San Diego, CA",
      position: "Software Engineer",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 14
      },
      status: "synced",
      team: [
        {
          id: 25,
          picture: "/demo/avatars/25.jpg",
          name: "Melany W.",
          initials: "MW",
          color: "success"
        },
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 12,
          picture: "/demo/avatars/12.jpg",
          name: "Joshua S.",
          initials: "JS",
          color: "warning"
        }
      ]
    },
    {
      id: 22,
      picture: "/demo/avatars/22.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "Dwayne H.",
      fullName: "Dwayne Hicks",
      initials: "DH",
      color: "info",
      location: "Los Angeles, CA",
      position: "Product Manager",
      bio: "This is a nice user description that we can use as demo content.",
      tasks: {
        pending: 5
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "Betty T.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 198,
          picture: void 0,
          name: "Sarah C.",
          initials: "SC",
          color: "h-purple"
        }
      ]
    }
  ];
  return data;
});

export { index as default };
