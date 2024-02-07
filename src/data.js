import Brent from './assets/images/brent.png'
import Caroline from './assets/images/caroline.jpg'
import Casey from './assets/images/casey.jpg'
import Emily from './assets/images/emily.png'
import Gray from './assets/images/gray.png'
import Kayla from './assets/images/kayla.jpg'
import Sophie from './assets/images/sophie.jpg'
import Tristan from './assets/images/tristan.png'

import Chart from './assets/images/chart.png'
import Eye from './assets/images/eye.png'
import File from './assets/images/file.png'
import Gear from './assets/images/gear.png'
import Laptop from './assets/images/laptop.png'
import Video from './assets/images/video.png'

import P1_PDF from './assets/pdfs/p1.pdf'
import P2_PDF from './assets/pdfs/p2.pdf'
import P1_PPTX from './assets/pptxs/p1.pptx'
import P2_PPTX from './assets/pptxs/p2.pptx'

export const navigation = [
  {
    name: 'Home',
    href: 'home'
  },
  {
    name: 'Team',
    href: 'team'
  },
  {
    name: 'Deliverables',
    href: 'deliverables'
  }
];

export const teamNav = [
  {
    name: 'CS 194H'
  },
  {
    name: 'CS 147'
  }
];

export const teamData = [
  {
    id: 1,
    name: 'Casey N.',
    title: 'Full Stack Developer',
    image: Casey,
    group: 'CS 147'
  },
  {
    id: 2,
    name: 'Kayla P.',
    title: 'Frontend Developer',
    image: Kayla,
    group: 'CS 147'
  },
  {
    id: 3,
    name: 'Caroline T.',
    title: 'Full Stack Developer',
    image: Caroline,
    group: 'CS 147'
  },
  {
    id: 4,
    name: 'Sophie W.',
    title: 'Full Stack Developer',
    image: Sophie,
    group: 'CS 147'
  },
  {
    id: 5,
    name: 'Casey N.',
    title: 'Full Stack Developer',
    image: Casey,
    group: 'CS 194H'
  },
  {
    id: 6,
    name: 'Brent J.',
    title: 'Designer, Developer, PM',
    image: Brent,
    group: 'CS 194H'
  },
  {
    id: 7,
    name: 'Emily R.',
    title: 'Designer, Developer, PM',
    image: Emily,
    group: 'CS 194H'
  },
  {
    id: 8,
    name: 'Gray W.',
    title: 'Designer, Developer',
    image: Gray,
    group: 'CS 194H'
  },
  {
    id: 9,
    name: 'Tristan W.',
    title: 'Designer, Developer',
    image: Tristan,
    group: 'CS 194H'
  }
];

export const deliverablesNav = [
  {
    name: 'CS 194H'
  },
  {
    name: 'CS 147'
  }
];

export const deliverablesData = [
  {
    id: '1',
    number: 'A1',
    name: 'Needfinding',
    group: 'CS 147',
    image: Eye,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Association%20of%20Music%20&%20Memories.pdf',
    links: [
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Association%20of%20Music%20&%20Memories.pptx'
      }
    ]
  },
  {
    id: '2',
    number: 'A2',
    name: 'POVs & Experience Prototypes',
    group: 'CS 147',
    image: Gear,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%2002%20-%20POVs_HMWs_Experience%20Prototypes.pdf',
    links: [
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%2002%20-%20POVs_HMWs_Experience%20Prototypes.pptx'
      }
    ]
  },
  {
    id: '3',
    number: 'A4',
    name: 'Concept Video',
    group: 'CS 147',
    image: Video,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/A4_%20Concept%20Video.pdf',
    links: [
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/A4_%20Concept%20Video.pptx'
      }
    ]
  },
  {
    id: '4',
    number: 'A5',
    name: 'Low-Fi Prototype & Test',
    group: 'CS 147',
    image: Gear,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%205_%20Low-Fi%20Prototyping.pdf',
    links: [
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%205_%20Low-Fi%20Prototyping.pptx'
      }
    ]
  },
  {
    id: '5',
    number: 'A6',
    name: 'Med-Fi Prototype',
    group: 'CS 147',
    image: Gear,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%206_%20Medium-Fi%20Prototype.pdf',
    links: [
      {
        name: 'View Figma',
        href: 'https://www.figma.com/proto/hZnVnBF5CYATEED4z5XJ1A?node-id=331-2372&starting-point-node-id=331:2372&t=7rn5WNXLsEPhjgTp-0&locale=en'
      },
      {
        name: 'View README File',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/README-A6.docx'
      },
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%206_%20Medium-Fi%20Prototype.pptx'
      }
    ]
  },
  {
    id: '6',
    number: 'A8',
    name: 'Hi-Fi Prototype',
    group: 'CS 147',
    image: Gear,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%208.pdf',
    links: [
      {
        name: 'View README File',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/'
      },
      {
        name: 'Download PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Assignment%208.pptx'
      }
    ]
  },
  {
    id: '7',
    number: 'A9',
    name: 'Heuristic Evaluation Summary',
    group: 'CS 147',
    image: File,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Anonymized%20MemReprise_%20A9%20Heuristic%20Evaluation.pdf',
    links: [
      {
        name: 'Download DOCX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Anonymized%20MemReprise_%20A9%20Heuristic%20Evaluation.docx'
      }
    ]
  },
  {
    id: '8',
    number: 'A10',
    name: 'Poster & Pitch Slide',
    group: 'CS 147',
    image: Laptop,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Poster.pdf',
    links: [
      {
        name: 'Download Poster PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Poster.pptx'
      },
      {
        name: 'Download Pitch Slide PDF',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Pitch%20Slide%20Final.pdf'
      },
      {
        name: 'Download Pitch Slide PPTX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Pitch%20Slide%20Final.pptx'
      },
      {
        name: 'Download Pitch Script PDF',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Pitch.pdf'
      },
      {
        name: 'Download Demo MP4',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Demo.mp4'
      }
    ]
  },
  {
    id: '9',
    number: 'A11',
    name: 'Final Report',
    group: 'CS 147',
    image: File,
    href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Report%20.pdf',
    links: [
      {
        name: 'Download DOCX',
        href: 'https://web.stanford.edu/class/cs147/projects/HarmoniousTies/MemReprise/Final%20Report%20.docx'
      }
    ]
  },
  {
    id: '10',
    number: 'P1',
    name: 'Project Recap',
    group: 'CS 194H',
    image: Laptop,
    href: P1_PDF,
    links: [
      {
        name: 'Download PPTX',
        href: P1_PPTX
      }
    ]
  },
  {
    id: '11',
    number: 'P2',
    name: 'Lab Usability Study',
    group: 'CS 194H',
    image: File,
    href: P2_PDF,
    links: [
      {
        name: 'Download PPTX',
        href: P2_PPTX
      }
    ]
  }
];